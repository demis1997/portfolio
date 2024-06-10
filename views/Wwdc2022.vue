<template>
<div>
    <img src="@/assets/win95Icons/apple2.png" alt="Nethermind" class="hero" />
    <div class="inner-content">
        <h3 class="heading"><b>Nethermind</b></h3>
        <p class="paragraph">
I had joined Nethermind initially as part of their security internship but during the first week, the company decided to include me in the main auditing teams' calls to start working with them on auditing various smart  contracts</p>
    </div>
    <div class="inner-content">
        <h3 class="heading"><b>MEV Marketplace</b></h3>
        <p class="paragraph">
During my team at Nethermind, I was able to audit an MEV marketplace protocol and an MEV bot which was part of their listings. We were able to find quite a few vulnerabilities in their system including one which allowed users to drain the marketplace contract which received deposits to allow users to rent out a bot for a period and gain a fee from it </p>
    </div>
    <img src="@/assets/Wwdc/mev.webp" class="images" />
    <div class="inner-content">
        <h3 class="heading"><b>Vault</b></h3>
        <p class="paragraph">
We audited a vault known as "Rook", the vulnerabilities were quite common ones such as a reentrancy and some minor rounding errors      </p>
    </div>
    <div class="inner-content">
        <h3 class="heading"><b>AMM</b></h3>
        <p class="paragraph">
We audited an amm following a hybrid model and found some vulnerabilities but it mostly taught me alot about the importance of gas optimisations in large protocols. This is where I learned about small gas optimisations like pre increments or using Mstore and SStore correctly        </p>
    </div>
    <img src="@/assets/Wwdc/amm.png" class="images" />
    <div class="inner-content">
  

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
