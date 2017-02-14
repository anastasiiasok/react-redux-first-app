import React, { Component } from 'react'
import { SVGLink } from '../helpers/svg'

export default class SVGSprites extends Component {

  render(){

    return (
      <svg style={{ display: 'none' }} xmlns="http://www.w3.org/2000/svg">
        <symbol id="play" viewBox="0 0 512 512">
          <g>
            <path d="M405.2,232.9L126.8,67.2c-3.4-2-6.9-3.2-10.9-3.2c-10.9,0-19.8,9-19.8,20H96v344h0.1c0,11,8.9,20,19.8,20  c4.1,0,7.5-1.4,11.2-3.4l278.1-165.5c6.6-5.5,10.8-13.8,10.8-23.1C416,246.7,411.8,238.5,405.2,232.9z"></path>
          </g>
        </symbol>
        <symbol id="link" viewBox="0 0 80 80">
          <g>
            <path d="M29.298,63.471l-4.048,4.02c-3.509,3.478-9.216,3.481-12.723,0c-1.686-1.673-2.612-3.895-2.612-6.257   s0.927-4.585,2.611-6.258l14.9-14.783c3.088-3.062,8.897-7.571,13.131-3.372c1.943,1.93,5.081,1.917,7.01-0.025   c1.93-1.942,1.918-5.081-0.025-7.009c-7.197-7.142-17.834-5.822-27.098,3.37L5.543,47.941C1.968,51.49,0,56.21,0,61.234   s1.968,9.743,5.544,13.292C9.223,78.176,14.054,80,18.887,80c4.834,0,9.667-1.824,13.348-5.476l4.051-4.021   c1.942-1.928,1.953-5.066,0.023-7.009C34.382,61.553,31.241,61.542,29.298,63.471z M74.454,6.044   c-7.73-7.67-18.538-8.086-25.694-0.986l-5.046,5.009c-1.943,1.929-1.955,5.066-0.025,7.009c1.93,1.943,5.068,1.954,7.011,0.025   l5.044-5.006c3.707-3.681,8.561-2.155,11.727,0.986c1.688,1.673,2.615,3.896,2.615,6.258c0,2.363-0.928,4.586-2.613,6.259   l-15.897,15.77c-7.269,7.212-10.679,3.827-12.134,2.383c-1.943-1.929-5.08-1.917-7.01,0.025c-1.93,1.942-1.918,5.081,0.025,7.009   c3.337,3.312,7.146,4.954,11.139,4.954c4.889,0,10.053-2.462,14.963-7.337l15.897-15.77C78.03,29.083,80,24.362,80,19.338   C80,14.316,78.03,9.595,74.454,6.044z"></path>
          </g>
        </symbol>
        <symbol id="logo" viewBox="0 0 111 18">
          <g fill="none" fill-rule="evenodd">
            <path fill="#F8F8F8" d="M0 1.278v3.275h4.683v13.12h3.362V4.553h4.66V1.278H0zm27.994 16.395l-2.617-6.844c1.753-.771 2.232-2.651 2.232-4.64 0-2.712-2.257-4.934-5.043-4.934h-6.34V17.65h3.362v-6.548h2.522l2.305 6.572h3.579zM22.566 4.529c.937 0 1.681.749 1.681 1.66 0 .913-.744 1.638-1.681 1.638h-2.978V4.529h2.978zM40.65 1.28l-3.435 6.174-3.458-6.175h-3.722l5.5 10.384v6.01h3.362v-6.01l5.475-10.384H40.65zM60.11 2.821a8.934 8.934 0 0 0-5.38-1.8c-4.803 0-8.717 3.811-8.717 8.489 0 4.677 3.914 8.489 8.718 8.489a8.889 8.889 0 0 0 5.571-1.964l-2.161-2.41c-3.17 2.34-8.382.492-8.382-4.115 0-4.397 4.923-6.315 8.19-4.257l2.161-2.432zm3.074 6.642c0 4.677 3.915 8.49 8.718 8.49s8.717-3.813 8.717-8.49c0-4.678-3.914-8.49-8.717-8.49-4.803 0-8.718 3.812-8.718 8.49zm8.718-5.122c2.906 0 5.26 2.292 5.26 5.122s-2.354 5.122-5.26 5.122c-2.906 0-5.26-2.292-5.26-5.122s2.354-5.122 5.26-5.122zm11.6-3.064V17.65h1.368v.024h3.386c1.129 0 2.234-.21 3.266-.655 1.009-.398 1.898-1.006 2.666-1.754a7.495 7.495 0 0 0 1.801-2.596 7.68 7.68 0 0 0 .673-3.204 7.65 7.65 0 0 0-.673-3.18 7.809 7.809 0 0 0-1.8-2.62 8.446 8.446 0 0 0-2.667-1.754 8.629 8.629 0 0 0-3.266-.632h-4.755zm3.361 13.12V4.553h1.393c2.786 0 5.044 2.198 5.044 4.91 0 2.714-2.258 4.935-5.044 4.935h-1.393zM111 1.278H99.785v16.395h11.143v-3.275h-7.781v-3.554h6.484V7.57h-6.484V4.553H111V1.278z"></path>
            <path fill="#262626" d="M68.4 0h7v6h-7z"></path>
            <path fill="#F8F8F8" d="M70.41 0h3.2v6h-3.2z"></path>
          </g>
        </symbol>
        <symbol id="options" viewBox="0 0 18 20">
          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fill-rule="evenodd">
            <g id="Desktop-HD" fill="#5A5A5A" transform="translate(-1407.000000, -95.000000)">
              <g id="Group-12" transform="translate(1390.000000, 80.000000)">
                <path id="settings" d="M34.1906861,26.5633215 L33.2270759,26.0012156 C32.183165,25.3588089 32.183165,23.8330928 33.2270759,23.1906861 L34.1906861,22.6285802 C34.9936945,22.1467751 35.234597,21.183165 34.752792,20.4604574 L33.9497835,19.095343 C33.4679785,18.2923346 32.5043684,18.0514321 31.7816608,18.5332371 L30.8180506,19.095343 C29.7741397,19.7377498 28.4090253,18.9347414 28.4090253,17.7302287 L28.4090253,16.6060169 C28.4090253,15.7227076 27.6863177,15 26.8030084,15 L25.1969916,15 C24.3136823,15 23.5909747,15.7227076 23.5909747,16.6060169 L23.5909747,17.6499278 C23.5909747,18.8544405 22.2258603,19.6574489 21.1819494,19.0150422 L20.2183392,18.5332371 C19.4153308,18.0514321 18.4517207,18.3726354 18.0502165,19.095343 L17.247208,20.4604574 C16.8457038,21.2634658 17.0866063,22.2270759 17.8093139,22.708881 L18.7729241,23.2709869 C19.816835,23.8330928 19.816835,25.4391097 18.7729241,26.0012156 L17.8093139,26.5633215 C17.0063055,27.0451266 16.765403,28.0087367 17.247208,28.7314443 L18.0502165,30.0965587 C18.5320215,30.8995671 19.4956316,31.1404696 20.2183392,30.6586646 L21.1819494,30.1768595 C22.2258603,29.5344527 23.5909747,30.3374612 23.5909747,31.5419738 L23.5909747,32.6661857 C23.5909747,33.5494949 24.3136823,34.2722025 25.1969916,34.2722025 L26.8030084,34.2722025 C27.6863177,34.2722025 28.4090253,33.5494949 28.4090253,32.6661857 L28.4090253,31.6222747 C28.4090253,30.417762 29.7741397,29.6147536 30.8180506,30.2571603 L31.7816608,30.8192662 C32.5846692,31.3010713 33.5482793,30.9798679 33.9497835,30.2571603 L34.752792,28.892046 C35.1542962,28.0087367 34.9133937,27.0451266 34.1906861,26.5633215 L34.1906861,26.5633215 Z M26,27.848135 C24.2333814,27.848135 22.7879662,26.4027198 22.7879662,24.6361013 C22.7879662,22.8694827 24.2333814,21.4240675 26,21.4240675 C27.7666186,21.4240675 29.2120338,22.8694827 29.2120338,24.6361013 C29.2120338,26.4027198 27.7666186,27.848135 26,27.848135 L26,27.848135 Z"></path>
              </g>
            </g>
          </g>
        </symbol>
        <symbol id="plus" viewBox="0 0 16 16">
          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fill-rule="evenodd">
            <g id="Desktop-HD" fill="#5A5A5A" transform="translate(-1357.000000, -97.000000)">
              <g id="Group-12" transform="translate(1340.000000, 80.000000)">
                <path id="Shape" d="M26.7391304,26.7391304 L26.7391304,32.6521739 C26.7391304,32.8441739 26.5833043,33 26.3913043,33 L23.6086957,33 C23.4166957,33 23.2608696,32.8441739 23.2608696,32.6521739 L23.2608696,26.7391304 L17.3478261,26.7391304 C17.1558261,26.7391304 17,26.5833043 17,26.3913043 L17,23.6086957 C17,23.4166957 17.1558261,23.2608696 17.3478261,23.2608696 L23.2608696,23.2608696 L23.2608696,17.3478261 C23.2608696,17.1558261 23.4166957,17 23.6086957,17 L26.3913043,17 C26.5833043,17 26.7391304,17.1558261 26.7391304,17.3478261 L26.7391304,23.2608696 L32.6521739,23.2608696 C32.8441739,23.2608696 33,23.4166957 33,23.6086957 L33,26.3913043 C33,26.5833043 32.8441739,26.7391304 32.6521739,26.7391304 L26.7391304,26.7391304 Z"></path>
              </g>
            </g>
          </g>
        </symbol>
        <symbol id="save" viewBox="0 0 18 18">
          <g id="Page-1" fill="none" fill-rule="evenodd" stroke="none" strokeWidth="1">
            <g id="Core" fill="#000000" transform="translate(-213.000000, -129.000000)">
              <g id="create" transform="translate(213.000000, 129.000000)">
                <path id="Shape" d="M0,14.2 L0,18 L3.8,18 L14.8,6.9 L11,3.1 L0,14.2 L0,14.2 Z M17.7,4 C18.1,3.6 18.1,3 17.7,2.6 L15.4,0.3 C15,-0.1 14.4,-0.1 14,0.3 L12.2,2.1 L16,5.9 L17.7,4 L17.7,4 Z"></path>
              </g>
            </g>
          </g>
        </symbol>
        <symbol id="close" viewBox="0 0 512 512">
          <path d="M284.3,245.1l110.9-110.9c7.8-7.8,7.8-20.5,0-28.3s-20.5-7.8-28.3,0L256,216.8L145.1,105.9  c-7.8-7.8-20.5-7.8-28.3,0s-7.8,20.5,0,28.3l110.9,110.9L116.9,355.9c-7.8,7.8-7.8,20.5,0,28.3c3.9,3.9,9,5.9,14.1,5.9  c5.1,0,10.2-2,14.1-5.9L256,273.3l110.9,110.9c3.9,3.9,9,5.9,14.1,5.9s10.2-2,14.1-5.9c7.8-7.8,7.8-20.5,0-28.3L284.3,245.1z"></path>
        </symbol>
        <symbol id="add-btn" viewBox="0 0 24 24">
          <path clip-rule="evenodd" d="M22.5,14H14v8.5c0,0.276-0.224,0.5-0.5,0.5h-4C9.224,23,9,22.776,9,22.5V14H0.5  C0.224,14,0,13.776,0,13.5v-4C0,9.224,0.224,9,0.5,9H9V0.5C9,0.224,9.224,0,9.5,0h4C13.776,0,14,0.224,14,0.5V9h8.5  C22.776,9,23,9.224,23,9.5v4C23,13.776,22.776,14,22.5,14z" fill-rule="evenodd"></path>
        </symbol>
        <symbol id="options-btn" viewBox="0 0 128 128">
          <path d="M119.78,73.778l-4.563-4.901c0.005-0.043,0.004-0.085-0.001-0.149c0.098-1.093,0.163-2.194,0.206-3.296  c0.01-0.318-0.003-0.658,0.003-0.976c0.009-0.845-0.003-1.662-0.041-2.478c-0.016-0.357-0.035-0.689-0.058-1.044  c-0.019-0.545-0.047-1.083-0.088-1.652l4.576-4.867c2.183-2.325,6.146-5.412,4.933-8.351l-5.01-12.157  c-1.213-2.942-6.194-2.325-9.379-2.436l-6.681-0.241c-0.505-0.604-1.049-1.178-1.572-1.761c-0.02-0.022-0.044-0.056-0.069-0.087  c-0.186-0.195-0.343-0.407-0.531-0.599c-0.283-0.308-0.609-0.602-0.901-0.902c-0.423-0.426-0.844-0.859-1.278-1.271  c-0.712-0.685-1.463-1.331-2.203-1.972c-0.03-0.031-0.078-0.057-0.104-0.078c-0.04-0.039-0.076-0.083-0.116-0.123l-0.216-6.693  c-0.098-3.169,0.525-8.159-2.397-9.375L82.129,3.308c-2.926-1.218-6.034,2.747-8.352,4.91L68.88,12.79  c-1.098-0.11-2.188-0.167-3.279-0.209c-0.305-0.012-0.612-0.006-0.938-0.004c-0.703-0.006-1.412-0.027-2.135,0.001  c-0.913,0.029-1.826,0.086-2.736,0.165c-0.117,0.006-0.234,0.006-0.326,0.014c-0.065,0.013-0.114,0.003-0.18,0.016l-4.871-4.586  c-2.321-2.171-5.412-6.146-8.351-4.935L33.907,8.262c-2.942,1.212-2.32,6.205-2.437,9.381l-0.237,6.691  c-0.073,0.055-0.146,0.131-0.214,0.198c-0.799,0.666-1.583,1.354-2.345,2.07c-0.281,0.276-0.552,0.554-0.827,0.833  c-0.541,0.527-1.084,1.071-1.603,1.63c-0.266,0.29-0.511,0.584-0.77,0.88c-0.352,0.382-0.696,0.759-1.033,1.162l-6.697,0.205  c-3.169,0.099-8.159-0.524-9.375,2.399l-5.063,12.16c-1.217,2.927,2.742,6.024,4.905,8.342l4.573,4.898  c-0.074,0.758-0.107,1.512-0.149,2.279c0.001,0.071-0.012,0.146-0.01,0.217c-0.062,1.3-0.093,2.598-0.048,3.892  c0.021,0.568,0.063,1.126,0.099,1.693c0.033,0.458,0.043,0.924,0.086,1.381c-0.003,0.05,0.001,0.096,0.005,0.13l-4.582,4.884  c-2.172,2.317-6.15,5.399-4.939,8.337l5.01,12.157c1.213,2.944,6.209,2.331,9.385,2.447l6.687,0.227  c0.045,0.066,0.099,0.105,0.147,0.173c0.678,0.814,1.39,1.609,2.132,2.409c0.261,0.281,0.537,0.522,0.802,0.798  c0.545,0.553,1.094,1.1,1.662,1.633c0.279,0.242,0.574,0.495,0.856,0.756c0.395,0.349,0.779,0.705,1.175,1.023l0.204,6.696  c0.1,3.169-0.52,8.171,2.404,9.388l12.16,5.062c2.928,1.219,6.023-2.743,8.341-4.906l4.902-4.562  c0.054,0.001,0.106-0.006,0.16-0.005c0.631,0.07,1.257,0.094,1.883,0.126c0.188,0.016,0.37,0.017,0.548,0.036  c0.294,0.009,0.576,0.032,0.86,0.042c0.336,0.007,0.671-0.003,1.007-0.002c0.817,0.019,1.635,0.002,2.445-0.035  c0.353-0.012,0.714-0.039,1.063-0.059c0.551-0.024,1.082-0.051,1.624-0.083l4.879,4.57c2.324,2.183,5.399,6.151,8.337,4.938  l12.158-5.01c2.943-1.214,2.335-6.199,2.447-9.385l0.23-6.676c0.573-0.478,1.125-0.976,1.658-1.462  c0.075-0.087,0.161-0.148,0.243-0.217c0.186-0.176,0.385-0.324,0.545-0.493c0.324-0.287,0.603-0.604,0.898-0.89  c0.422-0.427,0.87-0.854,1.299-1.301c0.623-0.669,1.25-1.369,1.856-2.098c0.069-0.065,0.123-0.12,0.182-0.205  c0.051-0.045,0.082-0.075,0.111-0.11l6.691-0.215c3.169-0.099,8.171,0.521,9.388-2.403l5.062-12.16  C125.91,79.203,121.942,76.096,119.78,73.778z M90.75,64c0,14.773-11.977,26.75-26.75,26.75S37.25,78.773,37.25,64  S49.227,37.25,64,37.25S90.75,49.227,90.75,64z" fill="#232323"></path>
        </symbol>
        <svg id="github" viewBox="0 0 32 32"><path clip-rule="evenodd" d="M16.003,0C7.17,0,0.008,7.162,0.008,15.997  c0,7.067,4.582,13.063,10.94,15.179c0.8,0.146,1.052-0.328,1.052-0.752c0-0.38,0.008-1.442,0-2.777  c-4.449,0.967-5.371-2.107-5.371-2.107c-0.727-1.848-1.775-2.34-1.775-2.34c-1.452-0.992,0.109-0.973,0.109-0.973  c1.605,0.113,2.451,1.649,2.451,1.649c1.427,2.443,3.743,1.737,4.654,1.329c0.146-1.034,0.56-1.739,1.017-2.139  c-3.552-0.404-7.286-1.776-7.286-7.906c0-1.747,0.623-3.174,1.646-4.292C7.28,10.464,6.73,8.837,7.602,6.634  c0,0,1.343-0.43,4.398,1.641c1.276-0.355,2.645-0.532,4.005-0.538c1.359,0.006,2.727,0.183,4.005,0.538  c3.055-2.07,4.396-1.641,4.396-1.641c0.872,2.203,0.323,3.83,0.159,4.234c1.023,1.118,1.644,2.545,1.644,4.292  c0,6.146-3.74,7.498-7.304,7.893C19.479,23.548,20,24.508,20,26c0,2,0,3.902,0,4.428c0,0.428,0.258,0.901,1.07,0.746  C27.422,29.055,32,23.062,32,15.997C32,7.162,24.838,0,16.003,0z" fill="#181616" fill-rule="evenodd"/></svg>
      </svg>
    );

  }

}
