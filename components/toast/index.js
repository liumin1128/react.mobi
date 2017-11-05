import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';

export default class extends Component {
  render() {
    return (
      <div>
        <ToastContainer />
        <style global jsx>{`
        @keyframes toastify-bounceInRight {
          from,
          60%,
          75%,
          90%,
          to {
            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
          }
          from {
            opacity: 0;
            transform: translate3d(3000px, 0, 0);
          }
          60% {
            opacity: 1;
            transform: translate3d(-25px, 0, 0);
          }
          75% {
            transform: translate3d(10px, 0, 0);
          }
          90% {
            transform: translate3d(-5px, 0, 0);
          }
          to {
            transform: none;
          }
        }
        .toastify-bounceInRight,
        .toast-enter--top-right,
        .toast-enter--bottom-right {
          animation-name: toastify-bounceInRight;
        }

        @keyframes toastify-bounceOutRight {
          20% {
            opacity: 1;
            transform: translate3d(-20px, 0, 0);
          }
          to {
            opacity: 0;
            transform: translate3d(2000px, 0, 0);
          }
        }
        .toastify-bounceOutRight,
        .toast-exit--top-right,
        .toast-exit--bottom-right {
          animation-name: toastify-bounceOutRight;
        }

        @keyframes toastify-bounceInLeft {
          from,
          60%,
          75%,
          90%,
          to {
            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
          }
          0% {
            opacity: 0;
            transform: translate3d(-3000px, 0, 0);
          }
          60% {
            opacity: 1;
            transform: translate3d(25px, 0, 0);
          }
          75% {
            transform: translate3d(-10px, 0, 0);
          }
          90% {
            transform: translate3d(5px, 0, 0);
          }
          to {
            transform: none;
          }
        }
        .toastify-bounceInLeft,
        .toast-enter--top-left,
        .toast-enter--bottom-left {
          animation-name: toastify-bounceInLeft;
        }

        @keyframes toastify-bounceOutLeft {
          20% {
            opacity: 1;
            transform: translate3d(20px, 0, 0);
          }
          to {
            opacity: 0;
            transform: translate3d(-2000px, 0, 0);
          }
        }
        .toastify-bounceOutLeft,
        .toast-exit--top-left,
        .toast-exit--bottom-left {
          animation-name: toastify-bounceOutLeft;
        }

        @keyframes toastify-bounceInUp {
          from,
          60%,
          75%,
          90%,
          to {
            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
          }
          from {
            opacity: 0;
            transform: translate3d(0, 3000px, 0);
          }
          60% {
            opacity: 1;
            transform: translate3d(0, -20px, 0);
          }
          75% {
            transform: translate3d(0, 10px, 0);
          }
          90% {
            transform: translate3d(0, -5px, 0);
          }
          to {
            transform: translate3d(0, 0, 0);
          }
        }
        .toastify-bounceInUp,
        .toast-enter--bottom-center {
          animation-name: toastify-bounceInUp;
        }

        @keyframes toastify-bounceOutUp {
          20% {
            transform: translate3d(0, -10px, 0);
          }
          40%,
          45% {
            opacity: 1;
            transform: translate3d(0, 20px, 0);
          }
          to {
            opacity: 0;
            transform: translate3d(0, -2000px, 0);
          }
        }
        .toastify-bounceOutUp,
        .toast-exit--top-center {
          animation-name: toastify-bounceOutUp;
        }

        @keyframes toastify-bounceInDown {
          from,
          60%,
          75%,
          90%,
          to {
            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
          }
          0% {
            opacity: 0;
            transform: translate3d(0, -3000px, 0);
          }
          60% {
            opacity: 1;
            transform: translate3d(0, 25px, 0);
          }
          75% {
            transform: translate3d(0, -10px, 0);
          }
          90% {
            transform: translate3d(0, 5px, 0);
          }
          to {
            transform: none;
          }
        }
        .toastify-bounceInDown,
        .toast-enter--top-center {
          animation-name: toastify-bounceInDown;
        }

        @keyframes toastify-bounceOutDown {
          20% {
            transform: translate3d(0, 10px, 0);
          }
          40%,
          45% {
            opacity: 1;
            transform: translate3d(0, -20px, 0);
          }
          to {
            opacity: 0;
            transform: translate3d(0, 2000px, 0);
          }
        }
        .toastify-bounceOutDown,
        .toast-exit--bottom-center {
          animation-name: toastify-bounceOutDown;
        }

        .toastify-animated {
          animation-duration: 0.75s;
          animation-fill-mode: both;
        }

        .toastify {
          z-index: 999;
          position: fixed;
          padding: 4px;
          width: 320px;
          box-sizing: border-box;
          color: #fff;
        }
        .toastify--top-left {
          top: 1em;
          left: 1em;
        }
        .toastify--top-center {
          top: 1em;
          left: 50%;
          margin-left: -160px;
        }
        .toastify--top-right {
          top: 1em;
          right: 1em;
        }
        .toastify--bottom-left {
          bottom: 1em;
          left: 1em;
        }
        .toastify--bottom-center {
          bottom: 1em;
          left: 50%;
          margin-left: -160px;
        }
        .toastify--bottom-right {
          bottom: 1em;
          right: 1em;
        }

        @media only screen and (max-width: 480px) {
          .toastify {
            width: 100vw;
            padding: 0;
          }

          .toastify--top-left,
          .toastify--top-center,
          .toastify--top-right {
            left: 0;
            top: 0;
            margin: 0;
          }

          .toastify--bottom-left,
          .toastify--bottom-center,
          .toastify--bottom-right {
            left: 0;
            bottom: 0;
            margin: 0;
          }
        }
        .toastify__close {
          padding: 0;
          color: #fff;
          font-weight: bold;
          font-size: 14px;
          background: transparent;
          outline: none;
          border: none;
          cursor: pointer;
          opacity: 0.7;
          transition: 0.3s ease;
          align-self: flex-start;
        }
        .toastify__close:hover,
        .toastify__close:focus {
          opacity: 1;
        }
        .toastify-content--default .toastify__close {
          color: #000;
          opacity: 0.3;
        }
        .toastify-content--default .toastify__close:hover {
          opacity: 1;
        }

        .toastify-content {
          position: relative;
          min-height: 48px;
          margin-bottom: 1rem;
          padding: 8px;
          border-radius: 1px;
          box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1),
            0 2px 15px 0 rgba(0, 0, 0, 0.05);
          display: flex;
          justify-content: space-between;
          max-height: 800px;
          overflow: hidden;
          font-family: sans-serif;
          cursor: pointer;
        }
        .toastify-content--default {
          background: #fff;
          color: #aaa;
        }
        .toastify-content--info {
          background: #3498db;
        }
        .toastify-content--success {
          background: #07bc0c;
        }
        .toastify-content--warning {
          background: #f1c40f;
        }
        .toastify-content--error {
          background: #e74c3c;
        }

        .toastify__body {
          margin: auto 0;
          flex: 1;
        }

        @media only screen and (max-width: 480px) {
          .toastify-content {
            margin-bottom: 0;
          }
        }
        @keyframes track-progress {
          0% {
            width: 100%;
          }
          100% {
            width: 0;
          }
        }
        .toastify__progress {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 5px;
          z-index: 999;
          opacity: 0.7;
          animation: track-progress linear 1;
          background-color: rgba(255, 255, 255, 0.7);
        }
        .toastify__progress--default {
          background: linear-gradient(
            to right,
            #4cd964,
            #5ac8fa,
            #007aff,
            #34aadc,
            #5856d6,
            #ff2d55
          );
        }

        /*# sourceMappingURL=ReactToastify.css.map */
      `}</style>
      </div>
    );
  }
}
