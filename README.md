# Forum-Thread
<div align="center">

<a href="https://github.com/Learn-For-Cause/Forum-Thread"><img src="https://badges.frapsoft.com/os/v1/open-source.svg?v=103"></a>
<a href="https://github.com/Learn-For-Cause/Forum-Thread"><img src="https://img.shields.io/badge/Built%20by-developers%20%3C%2F%3E-0059b3"></a>
<a href="https://github.com/Learn-For-Cause/Forum-Thread"><img src="https://img.shields.io/static/v1.svg?label=Contributions&message=Welcome&color=yellow"></a>
<a href="https://github.com/Learn-For-Cause/"><img src="https://img.shields.io/badge/Maintained%3F-yes-brightgreen.svg?v=103"></a>
<a href="https://github.com/Learn-For-Cause/Forum-Thread/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg?v=103"></a>

<a href="https://github.com/Learn-For-Cause/Forum-Thread/graphs/contributors"><img src="https://img.shields.io/github/contributors/Learn-For-Cause/Forum-Thread?color=brightgreen"></a>
<a href="https://github.com/Learn-For-Cause/Forum-Thread/stargazers"><img src="https://img.shields.io/github/stars/Learn-For-Cause/Forum-Thread?color=0059b3"></a>
<a href="https://github.com/Learn-For-Cause/Forum-Thread/network/members"><img src="https://img.shields.io/github/forks/Learn-For-Cause/Forum-Thread?color=yellow"></a>
<a href="https://github.com/Learn-For-Cause/Forum-Thread/issues"><img src="https://img.shields.io/github/issues/Learn-For-Cause/Forum-Thread?color=0059b3"></a>
<a href="https://github.com/Learn-For-Cause/Forum-Thread/issues?q=is%3Aissue+is%3Aclosed"><img src="https://img.shields.io/github/issues-closed-raw/Learn-For-Cause/Forum-Thread?color=yellow"></a>
<a href="https://github.com/Learn-For-Cause/Forum-Thread/pulls"><img src="https://img.shields.io/github/issues-pr/Learn-For-Cause/Forum-Thread?color=brightgreen"></a>
<a href="https://github.com/Learn-For-Cause/Forum-Thread/pulls?q=is%3Apr+is%3Aclosed"><img src="https://img.shields.io/github/issues-pr-closed-raw/Learn-For-Cause/Forum-Thread?color=0059b3"></a> 
</div>

Forum Thread is the 100% open source discussion platform built for the next decade of the Internet. Use it as a:

- mailing list
- discussion forum
- long-form chat room

To learn more about the philosophy and goals of the project, [visit **opensource.learnforcause.com**](https://www.opensource.learnforcause.com).


<h2>Technology Stack</h2>
<div align="center">
<p align ="center">

<img src="https://img.shields.io/badge/-MongoDB-blueviolet">
<img src="https://img.shields.io/badge/-ExpressJS-yellow">
<img src="https://img.shields.io/badge/-React%20Native-blue">
<img src="https://img.shields.io/badge/-NodeJS-brightgreen">
<img src="https://img.shields.io/badge/-Git-red">
<img src="https://img.shields.io/badge/-GitHub-lightgray">
<img src="https://img.shields.io/badge/-Webpack-orange">
<img src="https://img.shields.io/badge/-Bootstrap-informational">
<img src="https://img.shields.io/badge/-Sass-ff69b4">
	
<code><img src="https://img.icons8.com/color/48/000000/mongodb.png" width="5%" /></code>
<code><img src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/full/expressjslogo.png" width="5%" /></code>
<code><img src="https://img.icons8.com/color/48/000000/react-native.png" width="5%" /></code>
<code><img src="https://img.icons8.com/windows/64/26e07f/node-js.png" width="5%"/></code>
<code><img src="https://img.icons8.com/color/64/000000/git.png" width="5%"/></code>
<code><img src="https://img.icons8.com/color/64/000000/github.png" width="5%"/></code>
<code><img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/webpack/webpack.png" width="5%"/></code>
<code><img src="https://img.icons8.com/color/64/000000/bootstrap.png" width="5%"/></code>
<code><img src="https://img.icons8.com/color/64/000000/sass.png" width="5%"/></code>
</p>
</div>

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites 
<div align="center">
<img src="https://img.shields.io/badge/-Prerequisites-red"> 
<img src="https://shields.io/badge/-VS%20Code-brightgreen"> 
<img src="https://img.shields.io/badge/-NodeJS-blue">
</div>

- Download Node LTS version here: <https://nodejs.org/en/download/>
- Download VSCode from here: <https://code.visualstudio.com/>
- Install both before continuing

### Installation Guide
<div align="center">
<img src="https://img.shields.io/badge/-Extensions-blueviolet">
<img src="https://img.shields.io/badge/-Prettier-orange">
<img src="https://img.shields.io/badge/-EditorConfig-informational">
<img src="https://img.shields.io/badge/-Intellicode-brightgreen">
<img src="https://img.shields.io/badge/-ESLint-yellow">
</div>

- Open Visual Studio Code (Referred to as VSCode)
- In the left side bar, click the square icon to open the extensions menu
- Install the extensions:
  - Prettier
  - EditorConfig for VSCode
  - Visual Studio Intellicode
  - ESLint
- After installing ESLint, go into its settings by clicking the cog in it’s listing in the extenstion tab, and clicking ‘Configure Extenstion Settings’
- In here, enable auto fix on save.
Once thats done, close the ESLint tab that is open, and press Command-Shift-P on Mac, or Ctrl-Shift-P on windows, and type ‘Git Clone’ into the box that appears and hit enter.
- In the box that then comes up, enter:
<https://github.com/Learn-For-Cause/discuss-thread>
- Then press enter, then once that is done, click open in the bottom right.
- Open up a new teminal and type `npm install` and hit enter.
- Inside `config` folder create `config.js` file and copy paste the content from `config.example.js` ( Contact to admin [team@learnforcause.com](team@learnforcause.com) for the Mongodb URI and initialise both `db` and `db_dev` variables with it. )
- Once that finshes, the project is ready to go :)
- Start the web page and server by typing `npm start` into terminal.
- The site is now available at <http://localhost:8080/>

## Development

To get your environment setup, follow the community setup guide for your operating system.

1. If you're on macOS, try the [macOS development guide](https://meta.discourse.org/t/beginners-guide-to-install-discourse-on-macos-for-development/15772).
1. If you're on Ubuntu, try the [Ubuntu development guide](https://meta.discourse.org/t/beginners-guide-to-install-discourse-on-ubuntu-for-development/14727).
1. If you're on Windows, try the [Windows 10 development guide](https://meta.discourse.org/t/beginners-guide-to-install-discourse-on-windows-10-for-development/75149).

If you're familiar with how React.js works and are comfortable setting up your own environment, you can also try out the [**Forum Thread Advanced Developer Guide**](docs/DEVELOPER-ADVANCED.md), which is aimed primarily at Ubuntu and macOS environments.

## Requirements

Forum Thread is built for the *next* 10 years of the Internet, so our requirements are high.

Forum Thread supports the **latest, stable releases** of all major browsers and platforms:

| Browsers              | Tablets      | Phones       |
| --------------------- | ------------ | ------------ |
| Apple Safari          | iPadOS       | iOS          |
| Google Chrome         | Android      | Android      |
| Microsoft Edge        |              |              |
| Mozilla Firefox       |              |              |

Additionally, we aim to support Safari on iOS 12.5+ until January 2023 (Forum Thread 3.0).


# Wireframe

Before contributing go through the wire frame of the project and raise comments if you have any quaries, visit the Wire Frame [here](https://wireframepro.mockflow.com/view/Mc96bf38ae0b915aea8bf416364d60fab1620850361205)!

## Contributing

Forum Thread is **100% free** and **open source**. We encourage and support an active, healthy community that
accepts contributions from the public &ndash; including you!

Before contributing to Forum Thread:

1. Please read the complete mission statements on [**opensource.learnforcause.com**](https://www.opensource.learnforcause.org). Yes we actually believe this stuff; you should too.
2. Read and sign the [**Electronic Discourse Forums Contribution License Agreement**](https://www.opensource.org/cla).
3. Dig into [**CONTRIBUTING.MD**](CONTRIBUTING.md), which covers submitting bugs, requesting new features, preparing your code for a pull request, etc.
4. Always strive to collaborate [with mutual respect](https://github.com/Learn-For-Cause/Forum-Thread/blob/main/docs/code-of-conduct.md).
5. Not sure what to work on? [**We've got some ideas.**]()


We look forward to seeing your pull requests!


## Community 👥

[![DISCORD](https://img.shields.io/badge/Join-Discord-blue)](https://discord.gg/csVrbuxdwQ)


## The Forum Thread Team

The original Forum Thread code contributors can be found in [**AUTHORS.MD**](docs/AUTHORS.md). For a complete list of the many individuals that contributed to the design and implementation of Forum Thread, please refer to [the official Discourse blog]() and [GitHub's list of contributors](https://github.com/Learn-For-Cause/Forum-Thread/contributors).

## Authors :pencil:
<div align="center">
<img src="https://img.shields.io/badge/-Authors-yellow">
<img src="https://img.shields.io/badge/-Asutosh%20Das-informational">
<img src="https://img.shields.io/badge/-Sambid%20Anand%20Bhardwaj-brightgreen">
</div>

- **Asutosh Das** - _initial work_ - [Asutosh Das](https://github.com/Ash-exp)
- **Sambid Anand Bharadwaj** - _initial work_ - [Sambid Anand Bharadwaj](https://github.com/sams14)

Enjoy! Give us [feedback](https://github.com/Learn-For-Cause/Forum-Thread/issues) if you have suggestions on how to improve this information.

## Contributors 🌟 

Thanks to these wonderful people ✨✨:

<table>
	<tr>
		<td>
			<a href="https://github.com/Learn-For-Cause/Forum-Thread/contributors">
  				<img src="https://contrib.rocks/image?repo=Learn-For-Cause/Forum-Thread" />
			</a>
		</td>
	</tr>
</table>
