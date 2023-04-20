import React from "react";
import Helmet from "react-helmet";
import Settings from "../settings/settings.json";

export const HelmetMeta = () => {
    return (
        <Helmet>
            <meta name="theme-color" content={Settings.colors.primary} />
            <title>TPT | Values Aligned Infrastructure</title>
            <meta name="author" content="0xzoz" />
            <meta name="description" content="TPT is an independent validator operation supporting projects that resonate with our values. We are a council member of @StakingDefense" />
            <meta name="keywords" content="Blockchain technology, Decentralization, Distributed ledgers, Cryptocurrency, Smart contracts, Consensus algorithms, Permissioned blockchains, Public blockchains, Immutable data, Interoperability, Scalability, Security, Privacy, Digital identity, Tokenization, Mining, Node, Hashing, Merkle tree, Peer-to-peer network" />
        </Helmet>
    );
};
