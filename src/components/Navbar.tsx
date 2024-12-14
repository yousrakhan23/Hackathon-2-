"use client";

import React from "react";
import Link from "next/link";
import { Inter } from "next/font/google";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const fontInter500 = Inter({ weight: "500", subsets: ["latin"] });
const Navbar = () => {
  return (
    <div>
      <div className="bg-[#F0F2F3] py-9 mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">

        <svg
          width="166"
          height="40"
          viewBox="0 0 166 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          // className="mx-auto sm:mx-[10rem] md:mx-[15rem] lg:mx-[19rem] "
        
        >
          <g clipPath="url(#clip0_1_889)">
            <path
              d="M39.9938 19.7464C39.9286 18.4433 39.3566 17.2173 38.3999 16.3301C37.4432 15.4429 36.1776 14.9649 34.8732 14.9979C33.5689 15.031 32.3292 15.5727 31.4187 16.5072C30.5082 17.4418 29.9991 18.6952 30 20V28.3333C30 27.8913 29.8244 27.4674 29.5119 27.1548C29.1993 26.8422 28.7754 26.6667 28.3334 26.6667H11.6667C11.2247 26.6667 10.8007 26.8422 10.4882 27.1548C10.1756 27.4674 10 27.8913 10 28.3333V20C9.99996 19.0833 9.74791 18.1843 9.27143 17.4013C8.79495 16.6182 8.11237 15.9812 7.2983 15.5598C6.48422 15.1385 5.56999 14.949 4.65552 15.0122C3.74105 15.0754 2.86154 15.3887 2.11312 15.9179C1.3647 16.4472 0.776167 17.172 0.411857 18.0131C0.0475467 18.8543 -0.0785237 19.7794 0.0474254 20.6873C0.173374 21.5953 0.546496 22.4511 1.12601 23.1614C1.70552 23.8716 2.46912 24.4088 3.33334 24.7144V33.3333C3.33334 33.7753 3.50893 34.1993 3.8215 34.5118C4.13406 34.8244 4.55798 35 5.00001 35H6.66668V38.3333H10V35H30V38.3333H33.3334V35H35C35.4421 35 35.866 34.8244 36.1786 34.5118C36.4911 34.1993 36.6667 33.7753 36.6667 33.3333V24.7144C37.6824 24.3551 38.5549 23.6775 39.1544 22.7823C39.7539 21.8872 40.0483 20.8224 39.9938 19.7464Z"
              fill="#029FAE"
            />
            <path
              d="M11.6667 20V25H28.3334V20C28.3353 18.5224 28.8271 17.0872 29.7319 15.919C30.6367 14.7508 31.9033 13.9157 33.3334 13.5443V9.99996C33.3309 7.79058 32.4522 5.67241 30.8899 4.11014C29.3276 2.54788 27.2095 1.66911 25.0001 1.66663H15.0001C12.7907 1.66911 10.6725 2.54788 9.11026 4.11014C7.548 5.67241 6.66923 7.79058 6.66675 9.99996V13.5443C8.09689 13.9157 9.3635 14.7508 10.2683 15.919C11.173 17.0872 11.6649 18.5224 11.6667 20ZM23.3334 8.33329C23.663 8.33329 23.9853 8.43104 24.2594 8.61418C24.5334 8.79731 24.7471 9.05761 24.8732 9.36215C24.9994 9.6667 25.0324 10.0018 24.9681 10.3251C24.9037 10.6484 24.745 10.9454 24.5119 11.1785C24.2788 11.4116 23.9819 11.5703 23.6586 11.6346C23.3353 11.6989 23.0001 11.6659 22.6956 11.5398C22.3911 11.4136 22.1308 11.2 21.9476 10.9259C21.7645 10.6518 21.6667 10.3296 21.6667 9.99996C21.6667 9.55793 21.8423 9.13401 22.1549 8.82145C22.4675 8.50889 22.8914 8.33329 23.3334 8.33329ZM23.3334 13.3333C23.663 13.3333 23.9853 13.431 24.2594 13.6142C24.5334 13.7973 24.7471 14.0576 24.8732 14.3622C24.9994 14.6667 25.0324 15.0018 24.9681 15.3251C24.9037 15.6484 24.745 15.9454 24.5119 16.1785C24.2788 16.4116 23.9819 16.5703 23.6586 16.6346C23.3353 16.6989 23.0001 16.6659 22.6956 16.5398C22.3911 16.4136 22.1308 16.2 21.9476 15.9259C21.7645 15.6518 21.6667 15.3296 21.6667 15C21.6667 14.5579 21.8423 14.134 22.1549 13.8214C22.4675 13.5089 22.8914 13.3333 23.3334 13.3333ZM16.6667 8.33329C16.9964 8.33329 17.3186 8.43104 17.5927 8.61418C17.8668 8.79731 18.0804 9.05761 18.2065 9.36215C18.3327 9.6667 18.3657 10.0018 18.3014 10.3251C18.2371 10.6484 18.0783 10.9454 17.8453 11.1785C17.6122 11.4116 17.3152 11.5703 16.9919 11.6346C16.6686 11.6989 16.3335 11.6659 16.0289 11.5398C15.7244 11.4136 15.4641 11.2 15.281 10.9259C15.0978 10.6518 15.0001 10.3296 15.0001 9.99996C15.0001 9.55793 15.1757 9.13401 15.4882 8.82145C15.8008 8.50889 16.2247 8.33329 16.6667 8.33329ZM16.6667 13.3333C16.9964 13.3333 17.3186 13.431 17.5927 13.6142C17.8668 13.7973 18.0804 14.0576 18.2065 14.3622C18.3327 14.6667 18.3657 15.0018 18.3014 15.3251C18.2371 15.6484 18.0783 15.9454 17.8453 16.1785C17.6122 16.4116 17.3152 16.5703 16.9919 16.6346C16.6686 16.6989 16.3335 16.6659 16.0289 16.5398C15.7244 16.4136 15.4641 16.2 15.281 15.9259C15.0978 15.6518 15.0001 15.3296 15.0001 15C15.0001 14.5579 15.1757 14.134 15.4882 13.8214C15.8008 13.5089 16.2247 13.3333 16.6667 13.3333Z"
              fill="#029FAE"
            />
          </g>
          <path
            d="M65.7827 16.7401H62.902C62.7912 16.1245 62.585 15.5829 62.2834 15.1151C61.9818 14.6473 61.6125 14.2502 61.1754 13.924C60.7384 13.5978 60.2491 13.3516 59.7074 13.1854C59.1719 13.0192 58.6025 12.9361 57.9993 12.9361C56.9098 12.9361 55.9342 13.21 55.0724 13.7578C54.2169 14.3056 53.5398 15.1089 53.0412 16.1676C52.5488 17.2263 52.3026 18.5189 52.3026 20.0455C52.3026 21.5843 52.5488 22.883 53.0412 23.9418C53.5398 25.0005 54.2199 25.8007 55.0817 26.3423C55.9434 26.884 56.9129 27.1548 57.9901 27.1548C58.5871 27.1548 59.1534 27.0748 59.6889 26.9148C60.2306 26.7486 60.7199 26.5054 61.157 26.1854C61.594 25.8653 61.9633 25.4744 62.2649 25.0128C62.5727 24.545 62.785 24.0095 62.902 23.4062L65.7827 23.4155C65.6288 24.3449 65.3303 25.2005 64.8871 25.9822C64.45 26.7578 63.8868 27.4287 63.1974 27.995C62.5142 28.5552 61.7325 28.9891 60.8523 29.2969C59.9721 29.6046 59.0118 29.7585 57.9716 29.7585C56.3343 29.7585 54.8755 29.3707 53.5952 28.5952C52.3149 27.8134 51.3054 26.6963 50.5668 25.2436C49.8343 23.791 49.468 22.0582 49.468 20.0455C49.468 18.0265 49.8374 16.2938 50.576 14.8473C51.3146 13.3946 52.3241 12.2805 53.6044 11.505C54.8847 10.7232 56.3404 10.3324 57.9716 10.3324C58.9749 10.3324 59.9105 10.477 60.7784 10.7663C61.6525 11.0495 62.4373 11.468 63.1328 12.022C63.8284 12.5698 64.4039 13.2408 64.8594 14.0348C65.3149 14.8227 65.6226 15.7244 65.7827 16.7401ZM74.9487 29.7862C73.6191 29.7862 72.4589 29.4815 71.4679 28.8722C70.4769 28.2628 69.7074 27.4103 69.1596 26.3146C68.6118 25.219 68.3379 23.9387 68.3379 22.4737C68.3379 21.0026 68.6118 19.7161 69.1596 18.6143C69.7074 17.5125 70.4769 16.657 71.4679 16.0476C72.4589 15.4382 73.6191 15.1335 74.9487 15.1335C76.2782 15.1335 77.4385 15.4382 78.4295 16.0476C79.4205 16.657 80.1899 17.5125 80.7377 18.6143C81.2856 19.7161 81.5595 21.0026 81.5595 22.4737C81.5595 23.9387 81.2856 25.219 80.7377 26.3146C80.1899 27.4103 79.4205 28.2628 78.4295 28.8722C77.4385 29.4815 76.2782 29.7862 74.9487 29.7862ZM74.9579 27.4688C75.8197 27.4688 76.5337 27.241 77.1 26.7855C77.6663 26.33 78.0848 25.7237 78.3556 24.9666C78.6326 24.2095 78.7711 23.3755 78.7711 22.4645C78.7711 21.5597 78.6326 20.7287 78.3556 19.9716C78.0848 19.2083 77.6663 18.5959 77.1 18.1342C76.5337 17.6726 75.8197 17.4418 74.9579 17.4418C74.09 17.4418 73.3699 17.6726 72.7974 18.1342C72.2311 18.5959 71.8095 19.2083 71.5325 19.9716C71.2617 20.7287 71.1262 21.5597 71.1262 22.4645C71.1262 23.3755 71.2617 24.2095 71.5325 24.9666C71.8095 25.7237 72.2311 26.33 72.7974 26.7855C73.3699 27.241 74.09 27.4688 74.9579 27.4688ZM84.641 29.5V15.3182H87.2908V17.6264H87.4663C87.7617 16.8447 88.2449 16.2353 88.9158 15.7983C89.5868 15.3551 90.39 15.1335 91.3256 15.1335C92.2736 15.1335 93.0676 15.3551 93.7077 15.7983C94.354 16.2415 94.8311 16.8509 95.1388 17.6264H95.2866C95.6251 16.8693 96.1637 16.2661 96.9023 15.8168C97.641 15.3613 98.5212 15.1335 99.543 15.1335C100.829 15.1335 101.879 15.5367 102.691 16.343C103.51 17.1494 103.919 18.3651 103.919 19.9901V29.5H101.159V20.2486C101.159 19.2884 100.897 18.5928 100.374 18.1619C99.8507 17.7311 99.226 17.5156 98.4996 17.5156C97.601 17.5156 96.9023 17.7926 96.4038 18.3466C95.9052 18.8944 95.6559 19.5992 95.6559 20.4609V29.5H92.9045V20.0732C92.9045 19.3037 92.6644 18.6851 92.1843 18.2173C91.7042 17.7495 91.0794 17.5156 90.31 17.5156C89.7868 17.5156 89.3036 17.6541 88.8604 17.9311C88.4234 18.2019 88.0695 18.5805 87.7987 19.0668C87.534 19.553 87.4016 20.1162 87.4016 20.7564V29.5H84.641ZM114.369 15.3182V17.5341H106.355V15.3182H114.369ZM108.552 29.5V13.6747C108.552 12.7884 108.746 12.0528 109.134 11.468C109.521 10.8771 110.035 10.437 110.676 10.1477C111.316 9.85227 112.011 9.70454 112.762 9.70454C113.316 9.70454 113.79 9.75071 114.184 9.84304C114.578 9.92921 114.87 10.0092 115.061 10.0831L114.415 12.3175C114.286 12.2805 114.119 12.2375 113.916 12.1882C113.713 12.1328 113.467 12.1051 113.178 12.1051C112.507 12.1051 112.027 12.2713 111.737 12.6037C111.454 12.9361 111.313 13.4162 111.313 14.044V29.5H108.552ZM122.632 29.7862C121.303 29.7862 120.142 29.4815 119.151 28.8722C118.16 28.2628 117.391 27.4103 116.843 26.3146C116.295 25.219 116.021 23.9387 116.021 22.4737C116.021 21.0026 116.295 19.7161 116.843 18.6143C117.391 17.5125 118.16 16.657 119.151 16.0476C120.142 15.4382 121.303 15.1335 122.632 15.1335C123.962 15.1335 125.122 15.4382 126.113 16.0476C127.104 16.657 127.874 17.5125 128.421 18.6143C128.969 19.7161 129.243 21.0026 129.243 22.4737C129.243 23.9387 128.969 25.219 128.421 26.3146C127.874 27.4103 127.104 28.2628 126.113 28.8722C125.122 29.4815 123.962 29.7862 122.632 29.7862ZM122.642 27.4688C123.503 27.4688 124.217 27.241 124.784 26.7855C125.35 26.33 125.768 25.7237 126.039 24.9666C126.316 24.2095 126.455 23.3755 126.455 22.4645C126.455 21.5597 126.316 20.7287 126.039 19.9716C125.768 19.2083 125.35 18.5959 124.784 18.1342C124.217 17.6726 123.503 17.4418 122.642 17.4418C121.774 17.4418 121.053 17.6726 120.481 18.1342C119.915 18.5959 119.493 19.2083 119.216 19.9716C118.945 20.7287 118.81 21.5597 118.81 22.4645C118.81 23.3755 118.945 24.2095 119.216 24.9666C119.493 25.7237 119.915 26.33 120.481 26.7855C121.053 27.241 121.774 27.4688 122.642 27.4688ZM132.325 29.5V15.3182H134.993V17.571H135.141C135.399 16.8078 135.855 16.2076 136.507 15.7706C137.166 15.3274 137.911 15.1058 138.741 15.1058C138.914 15.1058 139.117 15.112 139.351 15.1243C139.591 15.1366 139.779 15.152 139.914 15.1705V17.8111C139.803 17.7803 139.606 17.7464 139.323 17.7095C139.04 17.6664 138.757 17.6449 138.474 17.6449C137.821 17.6449 137.24 17.7834 136.729 18.0604C136.224 18.3312 135.824 18.7098 135.528 19.196C135.233 19.6761 135.085 20.224 135.085 20.8395V29.5H132.325ZM149.761 15.3182V17.5341H142.015V15.3182H149.761ZM144.092 11.9205H146.853V25.3359C146.853 25.8714 146.933 26.2746 147.093 26.5455C147.253 26.8101 147.459 26.9917 147.711 27.0902C147.97 27.1825 148.25 27.2287 148.551 27.2287C148.773 27.2287 148.967 27.2133 149.133 27.1825C149.299 27.1518 149.429 27.1271 149.521 27.1087L150.02 29.3892C149.859 29.4508 149.632 29.5123 149.336 29.5739C149.041 29.6416 148.672 29.6785 148.228 29.6847C147.502 29.697 146.825 29.5677 146.197 29.2969C145.569 29.026 145.061 28.6075 144.674 28.0412C144.286 27.4749 144.092 26.764 144.092 25.9084V11.9205ZM154.56 34.8182C154.147 34.8182 153.772 34.7843 153.433 34.7166C153.095 34.6551 152.843 34.5874 152.676 34.5135L153.341 32.2514C153.846 32.3868 154.295 32.4453 154.689 32.4268C155.083 32.4084 155.431 32.2607 155.732 31.9837C156.04 31.7067 156.311 31.2543 156.545 30.6264L156.887 29.6847L151.698 15.3182H154.652L158.244 26.3239H158.392L161.983 15.3182H164.947L159.102 31.3928C158.832 32.1314 158.487 32.7562 158.068 33.267C157.65 33.7841 157.151 34.1719 156.573 34.4304C155.994 34.6889 155.323 34.8182 154.56 34.8182Z"
            fill="#272343"
          />
          <defs>
            <clipPath id="clip0_1_889">
              <rect width="40" height="40" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <Link href={"/Cart"} >
        <div className="absolute left-[50%] transform -translate-x-1/2 sm:left-[60%] md:left-[70%] lg:left-[76%] ">
          <svg
            width="120"
            height="44"
            viewBox="0 0 120 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="top-[50%] -translate-y-full ml-[11rem] sm:ml-0"
          >
            <rect width="120" height="44" rx="8" fill="white" />
            <path
              d="M18.5209 13.9791L20.4275 14.3091L21.3103 24.826C21.3442 25.2399 21.5329 25.6257 21.8387 25.9066C22.1446 26.1875 22.5451 26.3427 22.9603 26.3413H32.9611C33.3587 26.3417 33.7431 26.1986 34.0436 25.9382C34.344 25.6778 34.5404 25.3177 34.5965 24.9241L35.4673 18.9126C35.4905 18.7528 35.482 18.5899 35.4422 18.4333C35.4024 18.2767 35.3322 18.1295 35.2354 18.0001C35.1387 17.8707 35.0175 17.7616 34.8786 17.6791C34.7397 17.5966 34.5859 17.5423 34.426 17.5193C34.3673 17.5129 20.7337 17.5083 20.7337 17.5083"
              stroke="#272343"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M28.948 20.8954H31.4899"
              stroke="#272343"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22.5579 29.5194C22.6251 29.5165 22.6922 29.5272 22.7552 29.551C22.8181 29.5747 22.8756 29.611 22.9242 29.6575C22.9728 29.704 23.0115 29.7599 23.0379 29.8218C23.0643 29.8837 23.0779 29.9503 23.0779 30.0176C23.0779 30.0849 23.0643 30.1515 23.0379 30.2133C23.0115 30.2752 22.9728 30.3311 22.9242 30.3777C22.8756 30.4242 22.8181 30.4605 22.7552 30.4842C22.6922 30.5079 22.6251 30.5187 22.5579 30.5158C22.4294 30.5103 22.3081 30.4554 22.2191 30.3626C22.1302 30.2697 22.0806 30.1461 22.0806 30.0176C22.0806 29.889 22.1302 29.7654 22.2191 29.6726C22.3081 29.5798 22.4294 29.5249 22.5579 29.5194Z"
              fill="#272343"
              stroke="#272343"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M32.8988 29.5194C33.0312 29.5194 33.1583 29.572 33.252 29.6657C33.3457 29.7594 33.3983 29.8865 33.3983 30.019C33.3983 30.1515 33.3457 30.2786 33.252 30.3723C33.1583 30.4659 33.0312 30.5186 32.8988 30.5186C32.7663 30.5186 32.6392 30.4659 32.5455 30.3723C32.4518 30.2786 32.3992 30.1515 32.3992 30.019C32.3992 29.8865 32.4518 29.7594 32.5455 29.6657C32.6392 29.572 32.7663 29.5194 32.8988 29.5194Z"
              fill="#272343"
              stroke="#272343"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M54.6507 20.6108C54.3525 18.7443 52.8908 17.6534 51.0456 17.6534C48.7871 17.6534 47.1209 19.3452 47.1209 22.1364C47.1209 24.9276 48.7786 26.6193 51.0456 26.6193C52.9632 26.6193 54.3652 25.4176 54.6507 23.6918L53.3212 23.6875C53.0953 24.804 52.1578 25.4176 51.0542 25.4176C49.5584 25.4176 48.4292 24.2713 48.4292 22.1364C48.4292 20.0185 49.5542 18.8551 51.0584 18.8551C52.1706 18.8551 53.1039 19.4815 53.3212 20.6108H54.6507ZM58.0289 26.6449C59.1113 26.6449 59.7207 26.0952 59.9636 25.6051H60.0147V26.5H61.2591V22.1534C61.2591 20.2486 59.7591 19.8693 58.7193 19.8693C57.5346 19.8693 56.4437 20.3466 56.0176 21.5398L57.215 21.8125C57.4025 21.348 57.8798 20.9006 58.7363 20.9006C59.5588 20.9006 59.9806 21.331 59.9806 22.0724V22.1023C59.9806 22.5668 59.5034 22.5582 58.3272 22.6946C57.0872 22.8395 55.8173 23.1634 55.8173 24.6506C55.8173 25.9375 56.7846 26.6449 58.0289 26.6449ZM58.3059 25.6222C57.5858 25.6222 57.0659 25.2983 57.0659 24.6676C57.0659 23.9858 57.671 23.7429 58.4082 23.6449C58.8216 23.5895 59.8017 23.4787 59.9849 23.2955V24.1392C59.9849 24.9148 59.367 25.6222 58.3059 25.6222ZM62.9561 26.5H64.2303V22.5028C64.2303 21.6463 64.8908 21.0284 65.7942 21.0284C66.0584 21.0284 66.3567 21.0753 66.459 21.1051V19.8864C66.3311 19.8693 66.0797 19.8565 65.9178 19.8565C65.1507 19.8565 64.4945 20.2912 64.2559 20.9943H64.1877V19.9545H62.9561V26.5ZM71.0037 19.9545H69.6614V18.3864H68.3873V19.9545H67.4284V20.9773H68.3873V24.8423C68.383 26.0312 69.2907 26.6065 70.2963 26.5852C70.7012 26.581 70.9739 26.5043 71.123 26.4489L70.8929 25.3963C70.8077 25.4134 70.65 25.4517 70.4455 25.4517C70.0321 25.4517 69.6614 25.3153 69.6614 24.5781V20.9773H71.0037V19.9545Z"
              fill="#272343"
            />
            <circle cx="94" cy="22" r="10" fill="#007580" />
            <path
              d="M91.7087 25V24.24C92.162 23.88 92.5953 23.5167 93.0087 23.15C93.422 22.7833 93.7887 22.4233 94.1087 22.07C94.4353 21.71 94.692 21.36 94.8787 21.02C95.0653 20.6733 95.1587 20.34 95.1587 20.02C95.1587 19.8067 95.122 19.6067 95.0487 19.42C94.9753 19.2267 94.8553 19.0733 94.6887 18.96C94.522 18.84 94.2987 18.78 94.0187 18.78C93.5987 18.78 93.282 18.9133 93.0687 19.18C92.862 19.4467 92.762 19.7667 92.7687 20.14H91.7387C91.7453 19.6467 91.8487 19.2333 92.0487 18.9C92.2553 18.5667 92.5287 18.3133 92.8687 18.14C93.2153 17.9667 93.6053 17.88 94.0387 17.88C94.6987 17.88 95.2253 18.0667 95.6187 18.44C96.0187 18.8067 96.2187 19.32 96.2187 19.98C96.2187 20.3733 96.122 20.7633 95.9287 21.15C95.742 21.5367 95.4953 21.91 95.1887 22.27C94.8887 22.6233 94.5653 22.9567 94.2187 23.27C93.872 23.5833 93.542 23.8667 93.2287 24.12H96.4287V25H91.7087Z"
              fill="white"
            />
          </svg>
        </div></Link>
      </div>
{/* navbar */}
<div>
  <nav className="h-[84px] hidden lg:block">
    <ul
      className={`${fontInter500.className} flex items-center gap-8 ml-[19rem] mt-7 text-[#636270]`}
    >
      <li className="hover:text-[#007580]">
        <Link href="/">Home</Link>
      </li>
      <li className="hover:text-[#007580]">
        <Link href="/Shop">Shop</Link>
      </li>
      <li className="hover:text-[#007580]">
        <Link href="/Product">Product</Link>
      </li>
      <li className="hover:text-[#007580]">
        <Link href="/Pages">Pages</Link>
      </li>
      <li className="hover:text-[#007580]">
        <Link href="/About">About</Link>
      </li>

      <Link href="/Contact">
        <span className="text-[#636270] ml-[29rem] underline">
          Contact:
          <span className="text-[#272343] underline">(808) 555-0111</span>
        </span>
      </Link>
    </ul>
  </nav>

  {/* Responsive Navbar */}
  <div className="lg:hidden">
    <Sheet>
      <SheetTrigger>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="40px"
          viewBox="0 -960 960 960"
          width="40px"
          fill="#000"
          className="block ml-[18rem]"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </SheetTrigger>
      <SheetContent className="w-screen bg-[#766ac5] h-screen flex flex-col justify-center items-center gap-6">
        <li className="list-none text-[#FFFFFF] hover:text-[#272343]">
          <Link href="/">Home</Link>
        </li>
        <li className="list-none text-[#FFFFFF] hover:text-[#272343]">
          <Link href="/Shop">Shop</Link>
        </li>
        <li className="list-none text-[#FFFFFF] hover:text-[#272343]">
          <Link href="/Product">Product</Link>
        </li>
        <li className="list-none text-[#FFFFFF] hover:text-[#272343]">
          <Link href="/Pages">Pages</Link>
        </li>
        <li className="list-none text-[#FFFFFF] hover:text-[#272343]">
          <Link href="/About">About</Link>
        </li>
        <li className="list-none text-[#FFFFFF] hover:text-[#272343]">
          <Link href="/Contact">Contact</Link>
        </li>
      </SheetContent>
    </Sheet>
  </div>
</div>

    </div>
  );
};

export default Navbar;
