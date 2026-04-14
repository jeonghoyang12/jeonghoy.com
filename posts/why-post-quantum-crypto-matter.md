---
title: "Overview: Why Post-Quantum Crypto Matters"
date: "2026"
---

Before jumping into code, I wanted to really understand why this whole thing matters. Turns out there are three big reasons.

## 1. Our Current Encryption Is Basically on a Timer

So RSA - the thing that basically holds internet security together - works like this: you take two big prime numbers (say 61 and 53), multiply them to get 3233. Easy. But If I just hand you 3233 and ask "what two primes made this?", that's way harder. Now scale that up to numbers with hundreds of digits, and it becomes practically impossible for any computer today.

Here's the problem though. There's this thing called **Shor's algorithm** that runs on quantum computers, and it can crack that factorization fast. Like, what takes a regular computer and astronomical amount of time, a quantum computer could do in a reasonable timeframe. And it's not just RSA - ECC, Diffie-Hellman, basically all of our public-key crypto is vulnerable.

## 2. "Store Now, Decrypt Later" - Yeah, It's Already Happening

You might be thinking "okay but quantum computers aren't really a thing yet, so we're fine right?" Well, not exactly. Attackers can just **save encrypted data right now** and wait. Once quantum computers are powerful enough, they decrypt everything they've been hoarding.

Thank about it - government secrets, medical records, financial data - stuff that needs to stay private for 20 or 30 years. If someone's collecting that data today, they could read all of it once quantum computing catches up. That's why we need quantum-resistant encryption now, not later.

## 3. NIST Already Picked the Winners

NIST (the U.S. National Institute of Standards and Technology) saw this coming and started a competition back in 2016 to find quantum-resistant algorithms. In 2022, they announced the final picks:
- Kyber - for key encapsulation (basically secure key exchange). Now standardized as ML-KEM.
- Dilithium - for digital signatures. Now standardized as ML-DSA.
- Both are based on **lattice problems**, which are math problems that even quantum computers struggle with.

So yeah - the standards exist, the tools are ready. Time to actually build with them. That's what the next steps are about.