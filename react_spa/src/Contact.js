import React, { Component } from "react";
import "./Contact.css"
 
class Contact extends Component {
  render() {
    return (
      <div>
        <h2>GOT QUESTIONS?</h2>
        <p>The easiest thing to do is post on
        our <a href="http://forum.kirupa.com">forums</a>.
        </p>
        <table class="countdownContainer">
            <tr class= "info">
            <td colspan="4">Countdown until the New Year!</td>
            </tr>
            <tr class="info">
                <td id = "days">328</td>
                <td id = "hours">7</td>
                <td id = "minutes">20</td>
                <td id = "seconds">4</td>
            </tr>
            <tr>
                <td>Days</td>
                <td>Hours</td>
                <td>Minutes</td>
                <td>Seconds</td>
            </tr>
        </table>
      </div>
    );
  }
}
 
export default Contact;