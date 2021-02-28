import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Chart as ChartJs } from 'chart.js';
import calculateTimeSeries from '../../utils/calculateTimeSeries';

class Chart extends React.Component {
    componentDidMount() {
        this.drawChart()
    }

    drawChart() {
        const { riskLevel, conesData, initialSum, monthlySum, years, fee } = this.props;
        const { mu, sigma } = conesData.filter(cone => cone.riskLevel == riskLevel)[0];
        const{ median, upper95, lower05 } = calculateTimeSeries({
            mu,
            sigma,
            years,
            initialSum,
            monthlySum,
            fee
        });

        const labels = median.map((v, idx) => idx % 12 == 0 ? idx/12 : '');
        const dataMedian = median.map(v => v.y);
        const dataGood = upper95.map(v => v.y);
        const dataBad = lower05.map(v => v.y);

        const data = {
            datasets: [
                {
                    data: dataGood,
                    label: 'Good performance',
                    borderColor: 'rgba(100, 255, 100, 0.2)',
                    fill: false,
                    pointRadius: 0
                },
                {
                    data: dataMedian,
                    label: 'Median performance',
                    borderColor: 'rgba(100, 100, 100, 0.2)',
                    fill: false,
                    pointRadius: 0
                },
                {
                    data: dataBad,
                    label: 'Bad performance',
                    borderColor: 'rgba(255, 100, 100, 0.2)',
                    fill: false,
                    pointRadius: 0
                }
            ],
                labels
        };

        const options = {
            responsive: false,
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Years'
                    },
                    gridLines: {
                        drawOnChartArea: false
                    },
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Valuation (EUR)'
                    }
                }]
            }
        };

        const config = {
            type: 'line',
            data,
            options
        };

        const canvas = this.canvas;
        const context = canvas.getContext("2d");
        const myChart = new ChartJs(context, config);
    }

    render() {
        return (
            <div>
                <canvas
                    ref={ref => this.canvas = ref}
                    width={600}
                    height={400}
                />
            </div>
        );
    }
}

Chart.propTypes = {
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

export { Chart as TestableChart };

export default hocChain(Chart);
