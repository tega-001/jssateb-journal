// import { Box, Button, Container, Typography } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import { ArrowForward } from '@material-ui/icons';
// import { useRouter } from 'next/router';
// import React, { useEffect, useState } from 'react';
// import Confetti from 'react-confetti';
// import useWindowSize from 'react-use/lib/useWindowSize';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         width: '100%',
//         height: '100vh',
//         backgroundImage: `radial-gradient(rgba(255,255,255,0.52), rgba(14,3,3)),
//         url('https://techbullion.com/wp-content/uploads/2020/02/Daily-Journaling-1280x720.png')`,
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: 'center',
//         backgroundSize: 'cover',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'space-around',
//     },
//     heading: {
//         fontSize: '4rem',
//         fontWeight: 700,
//         color: '#78100dba',
//     },
//     text: {
//         color: 'white',
//     },
//     image: {
//         maxWidth: '140px',
//         height: 'auto',
//         padding: '10px',
//         borderRadius: '15px',
//     },
//     button: {
//         fontSize: '1.5rem',
//         backgroundColor: 'white',
//         color: theme.palette.primary.main,
//         padding: '10px 20px',
//         '&:hover': {
//             backgroundColor: '#78100dba',
//             color: 'white',
//         },
//     },
// }));

// const Welcome = () => {
//     const classes = useStyles();

//     const [counter, setCounter] = useState(120);
//     const [show, setShow] = useState(false);

//     useEffect(() => {
//         const timer =
//             counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
//         return () => clearInterval(timer);
//     }, [counter]);

//     const seconds = String(counter % 60).padStart(2, 0);
//     const minutes = String(Math.floor(counter / 60)).padStart(2, 0);
//     const { width, height } = useWindowSize();
//     const router = useRouter();

//     const onClickHandler = () => {
//         setShow(true);

//         if (counter === 0) {
//             router.push('/');
//         } else {
//             setTimeout(() => {
//                 router.push('/');
//             }, 5000);
//         }
//     };

//     return (
//         <Container maxWidth="xl" classes={{ root: classes.root }}>
//             {(counter <= 1 || show) && (
//                 <Confetti width={width - 1} height={height - 1} />
//             )}
//             <Box
//                 display="flex"
//                 flexDirection="row"
//                 justifyContent="center"
//                 alignItems="center"
//             >
//                 <img
//                     className={classes.image}
//                     src="https://jssateb.ac.in/assets/images/JSSMVP%20SWAMIJI.jpg"
//                 />
//                 <Box marginLeft="40px" marginRight="40px">
//                     <Typography
//                         align="center"
//                         className={classes.text}
//                         variant="h6"
//                     >
//                         With the divine blessings of
//                     </Typography>
//                     <Typography
//                         align="center"
//                         className={classes.text}
//                         variant="h5"
//                     >
//                         His Holiness Jagadguru Sri Shivaratri Deshikendra
//                         Mahaswamiji & <br />
//                         Jagadguru Sri Veersimhasana Mahasamsthana Math, Sutturu
//                         Srikshetra
//                     </Typography>
//                 </Box>
//                 <img
//                     className={classes.image}
//                     src="http://jssonline.org/wp-content/uploads/2018/11/hhs.jpg"
//                 />
//             </Box>
//             <Box display="flex" flexDirection="column" justifyContent="center">
//                 <Typography className={classes.heading} align="center">
//                     INAUGURATION OF
//                 </Typography>
//                 <Typography
//                     className={classes.heading}
//                     align="center"
//                     gutterBottom
//                 >
//                     JSS JOURNAL OF SCIENTIFIC STUDIES
//                 </Typography>
//                 <Typography
//                     variant="h3"
//                     align="center"
//                     gutterBottom
//                     className={classes.text}
//                 >
//                     {minutes} min : {seconds} sec
//                 </Typography>
//             </Box>
//             <Box display="flex" justifyContent="center">
//                 <Button
//                     className={classes.button}
//                     onClick={onClickHandler}
//                     endIcon={<ArrowForward />}
//                 >
//                     Let&apos;S Visit
//                 </Button>
//             </Box>
//         </Container>
//     );
// };

// export default Welcome;

import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Welcome = () => {
    const router = useRouter();
    useEffect(() => {
        router.push('/');
    }, []);

    return <div>Welcome</div>;
};

export default Welcome;
