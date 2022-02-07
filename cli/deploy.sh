#!/bin/sh
set -e

cargo build-bpf

if [ -f target/deploy/fyfystream.so ]; then
	solana program deploy --program-id cli/local_deploy_keypair.json \
		target/deploy/fyfystream.so
else
	solana program deploy --program-id ./local_deploy_keypair.json \
		../target/deploy/fyfystream.so
fi

