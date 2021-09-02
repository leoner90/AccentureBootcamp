<template>
<div class="ErrorPage">
    <p> 404 </p>
    <p> PAGE NOT FOUND </p>
</div>
</template>
 
 <style>
.ErrorPage {
    font-size: 5vw;
    text-align: center;
    font-weight: 900;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 550px;
    color: #112d4e;
}

.ErrorPage > p {
    margin: 5px;
}

 @media only screen and (max-width: 1024px) {
    .ErrorPage {
        font-size: 10vw;
    }
 }
 </style>