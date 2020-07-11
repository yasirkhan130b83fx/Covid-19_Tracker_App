import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css';
import cx from 'classnames'

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return 'Loading...';
    }
    // console.log(props.data)
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid xs={12} md={3} item component={Card} className={cx([styles.card, styles.infected])}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Infected
                        </Typography>
                        <Typography variant='h5'>
                            <CountUp start={0}
                            end={confirmed.value}
                            duration={2.5}
                            separator=','>

                            </CountUp>
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2">
                            Number of Active cases of COVID-19
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid xs={12} md={3} item component={Card} className={cx([styles.card, styles.recovered])}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Recoverd
                    </Typography>
                        <Typography variant='h5'>
                            <CountUp start={0}
                            end={recovered.value}
                            duration={2.5}
                            separator=','>

                            </CountUp>
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2">
                            Number of Recoverd cases of COVID-19
                    </Typography>
                    </CardContent>
                </Grid>
                <Grid xs={12} md={3} item component={Card} className={cx([styles.card, styles.deaths])}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Deaths
                    </Typography>
                        <Typography variant='h5'>
                            <CountUp start={0}
                            end={deaths.value}
                            duration={2.5}
                            separator=','>

                            </CountUp>
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2">
                            Number of Deaths from COVID-19
                    </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
};

export default Cards;