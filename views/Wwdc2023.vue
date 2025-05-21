<template>
<div>
    <img src="@/assets/Wwdc/ramenboi.gif" alt="Nethermind" class="hero" />
    <div class="inner-content">
        <h3 class="heading"><b>The Ramen Shop</b></h3>
        <p class="paragraph">
Created an NFT collection with my girlfriend which allowed users to go to any of the 35+ ramen restaurants we were partnering with and get discounts or free food by showing their NFT at the restaurant. I was the sole developer of the project and created the smart contract, merkle proof and web app which were used for minting by our users.        </p>
    </div>
    <div class="inner-content">
        <h3 class="heading"><b>Custodian work</b></h3>
        <p class="paragraph">
I have worked previously on multi part computation and custodians based on unbound security and coinbase mpc libraries. The coinbase library was using polynomials for advanced distributed key generation as well as threshold backups while unbound did not. I created a coordinators and threshold signing for the libraries and rewired all communication to pass through the coordinator rather than between them    </p>
    </div>

    <div class="inner-content">
        <h3 class="heading"><b>Hackathons</b></h3>
        <p class="paragraph">
I often attend hackathons in my free time and bug bounties. Some of the blockchains I have worked on were Sui, Aptos, Venom and Zksync. I was one of the first few people to have used Cairo and participated in the first few hackathons which used move, a programming language based on rust. I also attended a venom hackathon where I used threaded solidity </p>
    </div>
    <div class="inner-content">
        <h3 class="heading"><b>CTFs and bounty hunting </b></h3>
        <p class="paragraph">
my ctfs and bounties        </p>
    </div>
    <div class="inner-content">
        <h3 class="heading"><b>Other Projects</b></h3>
        <p class="paragraph">
other projects go here        </p>
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
