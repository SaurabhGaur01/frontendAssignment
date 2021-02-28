import React from 'react'; 
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import calculateTimeSeries from '../../utils/calculateTimeSeries';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

/* 
    Using React material for showing data in Tabular format,
    this component will be pick values from store and do the manipulation...
*/
const TableComponent = ({ 
    riskLevel, 
    conesData, 
    initialSum, 
    monthlySum, 
    years, 
    fee 
}) => {
    // Return null when conesData is an empty []
    if (conesData.length > 0) {
        const cone = conesData.filter(cone => cone.riskLevel == riskLevel)[0];
        const{ median, upper95, lower05 } = calculateTimeSeries({
            mu: cone ? cone.mu : 0,
            sigma: cone ? cone.sigma: 0,
            years,
            initialSum,
            monthlySum,
            fee
        });

        const months = median.map((v, idx) => idx);
        const dataGood = upper95.map(v => v.y);
        const dataMedian = median.map(v => v.y);
        const dataBad = lower05.map(v => v.y);

        return (
            <TableContainer>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Month</TableCell>
                            <TableCell>Good</TableCell>
                            <TableCell>Median</TableCell>
                            <TableCell>Bad</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { months.map((entry, idx) => (
                            <TableRow key={idx}>
                                <TableCell>{entry}</TableCell>
                                <TableCell>{dataGood[idx]}</TableCell>
                                <TableCell>{dataMedian[idx]}</TableCell>
                                <TableCell>{dataBad[idx]}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
    return null;
}

TableComponent.propTypes = {
    riskLevel: PropTypes.number.isRequired,
    conesData: PropTypes.arrayOf(PropTypes.shape({
        riskLevel: PropTypes.number.isRequired,
        mu: PropTypes.number.isRequired,
        sigma: PropTypes.number.isRequired,
    })).isRequired,
    initialSum: PropTypes.number.isRequired,
    years: PropTypes.number.isRequired,
    monthlySum: PropTypes.number.isRequired,
    fee: PropTypes.number.isRequired,
};

// Getting below keys from redux store
export const mapStateToProps = state => ({
    riskLevel: state.riskLevel,
    conesData: state.conesData,
    initialSum: state.initialSum,
    years: state.years,
    monthlySum: state.monthlySum,
    fee: state.fee,
});

const hocChain = compose(
    connect(mapStateToProps),
);

export { TableComponent as TestableTableComponent };

export default hocChain(TableComponent);
