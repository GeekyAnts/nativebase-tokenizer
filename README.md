# Absolute To NativeBase

> Fast conversion of absolute tokens to nativebase tokens. ⚡️

## Advice

If you just want to convert absolute tokens to nativebase tokens then we highly recommend using [absoluteToNB].

And if you want even more control, then you're in the right place! 👇👇

## Features

- 🚀 **Simple** - Convert absolute tokens to nativebase tokens.
- 🔥 **proximity** - Values near to the tokens can be taken if specific token value doesn't exist.
- 🔥 **increasing** - Comes with a increasing token if set to true/false it will find higher/lower values which are near to the token if specific token value doesn't exist.
- 🔥 **proximityRange** - Comes with a proximityRange token if set it will find values present in that range difference.

## Installation
```ts
npm i @native-base/nativebase-tokenizer
```


## Usage

First you'll want to fetch the absoluteToNB page:

```ts
import { absoluteToNB } from "@native-base/nativebase-tokenizer";

const convertedValue = absoluteToNB(value, 'propName');
```

Once you have the converted value you can pass it to the nativeBase page.

You may optionally pass a `config` to the API if you want to get values near to token if specific token value doesn't exist.

Note: Config has 3 parameters `proximity`,`proximityRange`,`increasing`. Proximity is not included by default it should be passed within the config.

- `proximity` should be set to true or false based on this Values near to the tokens can be taken if specific token value doesn't exist.
- `proximityRange` should be given a numeric value if set it will find values present in that range difference.
- `increasing` should be set to true or false based on this it will find higher/lower values which are near to the token if specific token value doesn't exist.

```ts
import { absoluteToNB } from "@native-base/nativebase-tokenizer";
const config = { proximity: true, proximityRange: 10, increasing: true };
const convertedValue = absoluteToNB(value, 'propName', config);
```

## Example

Here's a full [Example project](https://github.com/GeekyAnts/nativebase-tokenizer/tree/master/example/index.ts
).

- Without config

```ts
import { absoluteToNB } from "@native-base/nativebase-tokenizer";
const convertedValue = absoluteToNB(32, 'spacing');
console.log(convertedValue); // 4
```

- With config

```ts
import { absoluteToNB } from "@native-base/nativebase-tokenizer";
const config = { proximity: true, proximityRange: 3, increasing: true };
const convertedValue = absoluteToNB(29, 'spacing', config);
console.log(convertedValue); // 4
```

## License

GeekyAnts © [GeekyAnts](https://geekyants.com)
