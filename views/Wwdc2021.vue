<template>
    <div>
      <img
        src="@/assets/win95Icons/apple.png"
        alt="Swift Student Challenge"
        class="hero"
      />
      <div class="inner-content">
        <h3 class="heading"><b>Inverse</b></h3>
        <p class="paragraph">
Inverse is an NFT gaming company which created NFT games available on Cardano, Solana, Polygon and Ethereum for which I was the lead blockchain developer         </p>
      </div>
      <img src="@/assets/Wwdc/2021_1.webp" class="images" />
      <div class="inner-content">
        <h3 class="heading"><b>Idea</b></h3>
        <p class="paragraph">
The idea was to create a game which was accessible to players regardless of which blockchain they were using. Players would be able to use each supported blockchain to earn money within the game or earn points to customise their character and increase their skill level        </p>
      </div>
      <div class="inner-content">
        <h3 class="heading"><b>Technology</b></h3>
        <p class="paragraph">
The game included a staking protocol which allowed users to stake their nfts and earn a custom erc20 token which is used as a premium currency enabling players to sell it for usdc or use it to buy ing ame items. Other contracts included cross chain messaging oapps and upgradeable contracts which used oracles for data. The protocol also primarily used AWS for storing its assets and communication with backend primarily.         </p>

      </div>
      <img src="@/assets/Wwdc/aws.png" class="images" />
      <div class="inner-content">
        <h3 class="heading"><b>Team</b></h3>
        <p class="paragraph">
The team included an external smart contract auditing team, 2 branding/social media engineers, a cloud engineer, a front end engineer and multiple game engineers and game artists. I was working primarily with the cloud engineer and front end engineer to integrate pipelines and the smart contracts with the back end system using event listeners        </p>
      </div>


    </div>
  </template>
  
  <style scoped>
  .hero {
    width: 100%;
    background-position: center center;
    background-size: 100%;
    background-repeat: no-repeat;
    border: 1px solid rgb(0, 0, 0, 0.1);
  }
  
  .images {
    width: 100%;
    height: auto;
    /* object-fit: cover; */
  }
  
  .images-full {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .video {
    width: 100%;
    height: 350px;
  }
  
  .subtitle {
    font-size: 12px;
    color: gray;
    text-align: center;
  }
  
  .heading {
    padding-bottom: 5px;
  }
  
  .inner-content {
    padding-top: 30px;
    padding-bottom: 30px;
  }
  
  h6,
  h3 {
    margin: 0;
    padding: 0;
  }
  </style>
  