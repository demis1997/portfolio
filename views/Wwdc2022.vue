<template>
<div>
    <img src="@/assets/win95Icons/apple2.png" alt="Nethermind" class="hero" />
    <div class="inner-content">
        <h3 class="heading"><b>Nethermind — Smart Contract Auditor</b></h3>
        <p class="paragraph">
          Jul 2022 – Oct 2022. Audited DeFi protocols, vaults, AMMs, MEV systems
          and Cairo-based applications using manual review, Slither, Echidna and
          fuzzing. Collaborated with engineering teams on vulnerability
          remediation and security improvements.
        </p>
    </div>
    <div class="inner-content">
        <h3 class="heading"><b>MEV Marketplace</b></h3>
        <p class="paragraph">
          Audited an MEV marketplace protocol and related bot listings —
          including critical issues such as a drain path on deposit-based bot
          rental fee logic.
        </p>
    </div>
    <img src="@/assets/Wwdc/mev.webp" class="images" />
    <div class="inner-content">
        <h3 class="heading"><b>Vault</b></h3>
        <p class="paragraph">
          Audited vault systems (including Rook) for issues such as reentrancy
          and rounding errors, documenting findings and remediation guidance.
        </p>
    </div>
    <div class="inner-content">
        <h3 class="heading"><b>AMM</b></h3>
        <p class="paragraph">
          Audited a hybrid AMM model and deepened expertise in gas optimisation
          for large protocols — including patterns around pre-increments and
          correct MSTORE / SSTORE usage.
        </p>
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
