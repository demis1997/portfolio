<template>
  <div>
    <img
      src="@/assets/win95Icons/noss.webp"
      alt="Intellect logo"
      class="hero"
    />
    <div class="inner-content">
      <h3 class="heading">
        <b>// IntellectEU — Lead Solidity Engineer</b>
      </h3>
      <p class="paragraph">
        Led blockchain delivery across tokenization, institutional finance,
        interoperability and digital asset infrastructure (Jul 2023 – Jun 2026).
        Partnered with client stakeholders to convert business and regulatory
        objectives into technical workstreams, specifications and architecture
        proposals. Mentored three Solidity engineers and established engineering
        and security standards across delivery.
      </p>
    </div>
    <div class="inner-content">
      <h3 class="heading">
        <b>// Deutsche Börse D7 — Tokenized Securities</b>
      </h3>
      <p class="paragraph">
        Led the smart contract workstream for tokenized securities capabilities
        within Deutsche Börse's D7 digital post-trade environment. Designed
        regulated asset workflows covering issuance, investor positions,
        transfer restrictions, lifecycle events and settlement-related
        processes. Built a configurable digital securities framework based on
        ERC-1400 principles, contributing to infrastructure supporting more than
        EUR 10 billion in issuance.
      </p>
    </div>
    <div class="inner-content">
      <h3 class="heading"><b>// DTCC Digital Assets Platform</b></h3>
      <p class="paragraph">
        Designed modular institutional tokenization infrastructure enabling
        financial institutions to configure, issue and manage regulated digital
        assets on EVM-compatible networks. Built factories supporting ERC-20,
        ERC-3643/TREX and ERC-721 assets, plus identity, eligibility,
        whitelisting, delegation and transfer-control capabilities. Designed
        collateral, escrow, loan-account and attestation components for
        configurable financial-product workflows.
      </p>
    </div>
    <img src="@/assets/Nossaflex/neumorphism.webp" class="images-full" />
    <div class="inner-content">
      <h3 class="heading"><b>// Interoperability &amp; Infrastructure</b></h3>
      <p class="paragraph">
        Delivered Hyperledger Besu networks and LayerZero integrations for
        cross-chain issuance and payment flows across private and public
        networks. Supported architecture decisions, testing strategy, security
        reviews, technical documentation and production delivery with
        architects, auditors and institutional stakeholders.
      </p>
    </div>
    <div class="inner-content">
      <h3 class="heading"><b>// Research &amp; Mentoring</b></h3>
      <p class="paragraph">
        Led research initiatives across Polygon CDK/zkEVM and post-quantum
        cryptography alternatives to ECDSA. Mentored junior Solidity developers
        and senior backend engineers transitioning into web3 through reviews,
        standards and structured delivery practices.
      </p>
    </div>
    <img src="@/assets/Nossaflex/notebook.webp" class="images-full" />
    <br />
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
  height: 350px;
  object-fit: cover;
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
