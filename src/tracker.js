/**
 * Get the user IP throught the webkitRTCPeerConnection
 *
 * @return {Promise<string>}
 *
 * @see Get the client IP address with Javascript on Safari {@link https://stackoverflow.com/questions/46925857/get-the-client-ip-address-with-javascript-on-safari}
 */

function getUserIP() {
  window.RTCPeerConnection =
    window.RTCPeerConnection ||
    window.mozRTCPeerConnection ||
    window.webkitRTCPeerConnection; //compatibility for firefox and chrome
  var pc = new RTCPeerConnection({
      iceServers: [
        { urls: "stun:stun.services.mozilla.com" },
        { urls: "stun:stun.l.google.com:19302" },
      ],
    }),
    noop = function () {};
  pc.createDataChannel(""); //create a bogus data channel
  pc.createOffer(pc.setLocalDescription.bind(pc), noop); // create offer and set local description
  pc.onicecandidate = function (ice) {
    //console.log(ice);
    //listen for candidate events
    if (!ice || !ice.candidate || !ice.candidate.candidate) return;
    var myIP =
      /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(
        ice.candidate.candidate
      )[1];
    console.log("my IP: ", myIP);

    pc.onicecandidate = noop;
  };
}
export default getUserIP;
