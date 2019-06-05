import React from 'react'
import { withStyles, createStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Tooltip from '@material-ui/core/Tooltip'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import ViewListIcon from '@material-ui/icons/ViewList'
import RecentActorsIcon from '@material-ui/icons/RecentActors'
import CodeIcon from '@material-ui/icons/Code'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import SendIcon from '@material-ui/icons/Send'
import { H1, H3, H4, H6 } from './Headers'

import './static/fonts/fonts.css'


function LandingPage(props) {
    const { classes } = props
    return (
        <div className={classes.root}>
            <header className={classes.header}>
                {/*<H1 className={classes.headerTitle}>Ujo</H1>*/}
                <img className={classes.headerLogo} src="https://ujomusic.com/_next/static/images/gradient-b5c29bd01cd93b3354c5bce246c32cde.png" />
                <div className={classes.headerSubtitle}>An Ethereum component library for media platforms.</div>

            </header>

            <div className={classes.main}>
                <H3 className={classes.mainTitle}>
                    Our components
                </H3>

                <div className={classes.componentsContainer}>
                    <Card className={classes.componentCard}>
                        <CardContent className={classes.componentCardContent}>
                            <WhatshotIcon className={classes.componentIcon} />
                            <H4>Charts</H4>
                            <p>Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>

                            <div className={classes.buttonContainer}>
                                <Tooltip title="Read the docs">
                                    <Button color="primary"><CodeIcon className={classes.buttonIcon} /></Button>
                                </Tooltip>
                                <Tooltip title="See the demo">
                                    <Button color="primary"><PlayCircleOutlineIcon className={classes.buttonIcon} /></Button>
                                </Tooltip>
                                <Tooltip title="See it in the Ujo Portal">
                                    <Button color="primary"><MusicNoteIcon className={classes.buttonIcon} /></Button>
                                </Tooltip>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className={classes.componentCard}>
                        <CardContent className={classes.componentCardContent}>
                            <ViewListIcon className={classes.componentIcon} />
                            <H4>Curation</H4>
                            <p>Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>

                            <div className={classes.buttonContainer}>
                                <Tooltip title="Read the docs">
                                    <Button color="primary"><CodeIcon className={classes.buttonIcon} /></Button>
                                </Tooltip>
                                <Tooltip title="See the demo">
                                    <Button color="primary"><PlayCircleOutlineIcon className={classes.buttonIcon} /></Button>
                                </Tooltip>
                                <Tooltip title="See it in the Ujo Portal">
                                    <Button color="primary"><MusicNoteIcon className={classes.buttonIcon} /></Button>
                                </Tooltip>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className={classes.componentCard}>
                        <CardContent className={classes.componentCardContent}>
                            <RecentActorsIcon className={classes.componentIcon} />
                            <H4>Collections</H4>
                            <p>Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>

                            <div className={classes.buttonContainer}>
                                <Tooltip title="Read the docs">
                                    <Button color="primary"><CodeIcon className={classes.buttonIcon} /></Button>
                                </Tooltip>
                                <Tooltip title="See the demo">
                                    <Button color="primary"><PlayCircleOutlineIcon className={classes.buttonIcon} /></Button>
                                </Tooltip>
                                <Tooltip title="See it in the Ujo Portal">
                                    <Button color="primary"><MusicNoteIcon className={classes.buttonIcon} /></Button>
                                </Tooltip>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className={classes.componentCard}>
                        <CardContent className={classes.componentCardContent}>
                            <AttachMoneyIcon className={classes.componentIcon} />
                            <H4>Licensing</H4>
                            <p>Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>

                            <div className={classes.buttonContainer}>
                                <Tooltip title="Read the docs">
                                    <Button color="primary"><CodeIcon className={classes.buttonIcon} /></Button>
                                </Tooltip>
                                <Tooltip title="See the demo">
                                    <Button color="primary"><PlayCircleOutlineIcon className={classes.buttonIcon} /></Button>
                                </Tooltip>
                                <Tooltip title="See it in the Ujo Portal">
                                    <Button color="primary"><MusicNoteIcon className={classes.buttonIcon} /></Button>
                                </Tooltip>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className={classes.componentCard}>
                        <CardContent className={classes.componentCardContent}>
                            <LockOpenIcon className={classes.componentIcon} />
                            <H4>Rights</H4>
                            <p>Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>

                            <div className={classes.buttonContainer}>
                                <Tooltip title="Read the docs">
                                    <Button color="primary"><CodeIcon className={classes.buttonIcon} /></Button>
                                </Tooltip>
                                <Tooltip title="See the demo">
                                    <Button color="primary"><PlayCircleOutlineIcon className={classes.buttonIcon} /></Button>
                                </Tooltip>
                                <Tooltip title="See it in the Ujo Portal">
                                    <Button color="primary"><MusicNoteIcon className={classes.buttonIcon} /></Button>
                                </Tooltip>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className={classes.inTheNews}>
                    <H6 className={classes.inTheNewsTitle}>As seen in</H6>

                    <div className={classes.inTheNewsLogoContainer}>
                        <a href="https://www.forbes.com/sites/jonathanchester/2016/09/16/how-blockchain-startups-are-disrupting-the-15-billion-music-industry/#171c60d7407c" class="publication" target="_blank" rel="noopener noreferrer">
                            <img src="https://ujomusic.com/_next/static/images/forbes-90a36609aff3edd490859e5c535587e6.png" alt="forbes" />
                        </a>
                        <a href="https://cointelegraph.com/news/blockchain-to-disrupt-balance-of-power-in-tv-music-and-film-industry" class="publication" target="_blank" rel="noopener noreferrer">
                            <img src="https://ujomusic.com/_next/static/images/cointelegraph-c165b1878d741e34557042dc2edeca83.png" alt="cointelegraph" />
                        </a>
                        <a href="https://cheddar.com/videos/ujo-music-founder-says-blockchain-can-fix-the-music-industry" class="publication" target="_blank" rel="noopener noreferrer">
                            <img src="https://ujomusic.com/_next/static/images/cheddar-97a00fcf6c60ee0f9942c67801d2a576.png" alt="cheddar" />
                        </a>
                        <a href="https://www.economist.com/technology-quarterly/2018/09/01/the-promise-of-the-blockchain-technology" class="publication" target="_blank" rel="noopener noreferrer">
                            <img src="https://ujomusic.com/_next/static/images/economist-24621d61ef38be8aee276232f8d1b4e6.png" alt="economist" />
                        </a>
                        <a href="https://musically.com/2017/08/04/ujo-music-blockchain-uphill-battle-existing-companies/" class="publication" target="_blank" rel="noopener noreferrer">
                            <img src="https://ujomusic.com/_next/static/images/musically-b5d46a8600db38e2443842bc550d811a.png" alt="musically" />
                        </a>
                    </div>
                </div>

                <div className={classes.signupForm}>
                    <Card>
                        <CardContent className={classes.signupFormCardContent}>
                            <H4 className={classes.signupFormTitle}>Sign up for updates</H4>

                            <div className={classes.signupFormControls}>
                                <TextField label="Enter your email address" fullWidth className={classes.signupEmailField} />
                                <Button variant="contained" color="primary" className={classes.signupButton}>Sign up <SendIcon className={classes.signupButtonIcon} /></Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
           </div>
        </div>
    )
}

const backgrounds = [
    [
        // 'linear-gradient(0deg, rgba(218, 0, 144, 0.6), rgba(83, 0, 232, 1))',
        'linear-gradient(0deg, #2d2d2d 0%, rgba(218, 0, 144, 0.6) 39%, rgba(83, 0, 232, 1) 100%)',
        'url(https://peopledotcom.files.wordpress.com/2018/08/aretha-franklin-2-2000.jpg)',
    ],
    [
        'linear-gradient(0deg, rgba(218, 0, 144, 0.8), rgba(83, 0, 232, 1))',
        'url(https://longreadsblog.files.wordpress.com/2018/08/aretha-franklin-w-record.jpg?w=1200)',
    ],
    [
        'linear-gradient(0deg, rgba(218, 0, 144, 0.8), rgba(83, 0, 232, 0.8))',
        'url(http://thebluesmobile.com/wp-content/uploads/2016/05/1401x788-74310536.jpg)',
    ],
]

const randomInt = (max) => Math.floor(Math.random() * Math.floor(max))

const styles = (theme) => createStyles({
    root: {},
    header: {
        // backgroundColor: theme.palette.secondary.main,
        background: backgrounds[ 0 ], //randomInt(backgrounds.length - 1) ],
        backgroundSize: 'cover',
        height: 640,
        width: '100%',
        paddingTop: 200,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: '"Montserrat"',
    },
    headerLogo: {
        width: 280,
        marginBottom: 30,
    },
    headerTitle: {
        color: 'white',
        marginBottom: 30,
    },
    headerSubtitle: {
        color: 'white',
        fontSize: '2rem',
        textAlign: 'center',
        padding: '0 10px',
    },
    main: {
        marginTop: -100,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    mainTitle: {
        // textAlign: 'center',
        marginBottom: 30,
        color: 'white',
        fontFamily: '"Montserrat Ultra Light"',
    },
    componentsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        maxWidth: 960,
    },
    componentCard: {
        width: 300,
        marginBottom: 30,
        marginRight: 20,
    },
    componentCardContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    componentIcon: {
        fill: theme.palette.primary.main,
        width: 48,
        height: 48,
    },
    buttonContainer: {
        // width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
    },
    buttonIcon: {
        marginRight: theme.spacing(1),
        fill: 'grey',
    },

    inTheNews: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        minHeight: 200,
        paddingTop: 64,
    },
    inTheNewsLogoContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        maxWidth: 1024,

        '& a': {
            display: 'block',
        },

        '& img': {
            height: 50,
            filter: 'saturate(0) opacity(60%) invert(100%)',
        },
    },
    inTheNewsTitle: {
        fontFamily: '"Montserrat"',
        color: theme.palette.primary.main,
        textAlign: 'center',
        marginBottom: 30,
        opacity: 0.7,
    },
    signupForm: {
        paddingTop: 64,
        paddingBottom: 200,
        paddingLeft: 20,
        paddingRight: 20,
        width: '100%',
        maxWidth: 480,
    },
    signupFormCardContent: {
        maxWidth: 480,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    signupFormTitle: {
        fontFamily: '"Montserrat Ultra Light"',
        marginBottom: 30,
    },
    signupFormControls: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    signupEmailField: {
    },
    signupButton: {
        marginTop: 20,
        width: 'fit-content',
    },
    signupButtonIcon: {
        marginLeft: theme.spacing(1),
    },
})

export default withStyles(styles)(LandingPage)
