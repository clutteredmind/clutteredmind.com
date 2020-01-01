/*
 * File: timer.js
 * Created Date: Wednesday January 1st 2020
 * Author: Clutteredmind
 * -----
 * Last Modified: Wednesday, 1st January 2020 9:33:11 am
 * Modified By: Clutteredmind
 */

// Set up timer to update circles.
setInterval(() => {
    let currentTime = new Date();
    let progressSeconds = currentTime.getSeconds();
    let progressMinutes = currentTime.getMinutes();
    let progressHours = currentTime.getHours();

    $('.text-time-display')
        .text(`${('00' + progressHours.toString()).slice(-2)}:${('00' + progressMinutes.toString()).slice(-2)}:${('00' + progressSeconds.toString()).slice(-2)}`);
    $('.progress-circle-seconds')
        .attr('data-progress', Math.floor((progressSeconds * 100) / 60));
    $('.progress-circle-minutes')
        .attr('data-progress', Math.floor((progressMinutes * 100) / 60));
    $('.progress-circle-hours')
        .attr('data-progress', Math.floor((progressHours * 100) / 24));
}, 1000);

