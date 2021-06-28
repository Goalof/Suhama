import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Hr } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Suhama
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section background="--color-orange" quarkly-title="Header">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" max-width="90%" />
			<Box padding="20px 20px 20px 20px" display="grid" width="50%" md-width="30%">
				<Box display="flex" align-items="center">
					<Text margin="0px 0px 0px 0px" font="--headline3" color="--light">
						Suhama
					</Text>
				</Box>
			</Box>
			<Box padding="20px 20px 20px 20px" width="50%" display="grid" md-width="70%">
				<Box display="flex" justify-content="flex-end" align-items="center">
					<Text margin="0px 0px 0px 0px">
						<Link href="#" text-decoration-line="initial" color="--light" font="500 20px/1.3 --fontFamily-serifTimes">
							Facebook
						</Link>
					</Text>
					<Text margin="0px 0px 0px 20px">
						<Link href="#" text-decoration-line="initial" color="--light" font="500 20px/1.3 --fontFamily-serifTimes">
							LinkedIn{"\n\n"}
						</Link>
					</Text>
					<Text margin="0px 0px 0px 20px">
						<Link href="#" text-decoration-line="initial" color="--light" font="500 20px/1.3 --fontFamily-serifTimes">
							Twitter{"\n\n"}
						</Link>
					</Text>
				</Box>
			</Box>
		</Section>
		<Section background="--color-orange" padding="150px 0 150px 0" md-padding="70px 0 70px 0" sm-padding="40px 0 40px 0">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box padding="20px 20px 20px 20px" width="10%" display="grid" md-display="none">
				<Box display="flex" align-items="center" />
			</Box>
			<Box padding="20px 20px 20px 20px" display="grid" width="90%" md-width="100%">
				<Box display="flex" justify-content="flex-start" align-items="center">
					<Text
						margin="0px 0px 0px 0px"
						color="--light"
						font="--headline1"
						md-text-align="center"
						md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
						sm-font="normal 700 32px/1.3 &quot;Inter&quot;, sans-serif"
						sm-text-align="left"
					>
						Copywriter and author based in New York City. Currently juggling words at Gavrilles & Co.{"\n\n"}
					</Text>
				</Box>
			</Box>
		</Section>
		<Section background="--color-orange" padding="150px 0 150px 0" md-padding="70px 0 70px 0" sm-padding="40px 0 40px 0">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box display="flex" flex-wrap="wrap">
				<Box padding="20px 20px 20px 20px" width="10%" display="grid" md-display="none">
					<Box display="flex" align-items="center" />
				</Box>
				<Box
					padding="20px 20px 20px 20px"
					display="flex"
					width="90%"
					md-width="100%"
					sm-flex-wrap="wrap"
				>
					<Box
						display="flex"
						justify-content="flex-start"
						align-items="flex-start"
						width="20%"
						md-width="25%"
						sm-width="100%"
					>
						<Hr width="100%" color="--light" />
					</Box>
					<Box
						display="flex"
						justify-content="center"
						align-items="flex-start"
						width="20%"
						md-width="25%"
						sm-width="100%"
						sm-justify-content="flex-start"
						sm-margin="0px 0px 10px 0px"
					>
						<Text font="normal 600 18px/1.5 --fontFamily-serifTimes" color="--light" margin="0px 0px 0px 0px">
							Intro
						</Text>
					</Box>
					<Box
						display="flex"
						justify-content="flex-start"
						align-items="center"
						width="60%"
						sm-width="100%"
					>
						<Text
							font="--headline4"
							color="--light"
							margin="0px 0px 0px 0px"
							md-font="500 20px/1.3 Cambria, 'Hoefler Text', Utopia, 'Liberation Serif', 'Nimbus Roman No9 L Regular', Times, 'Times New Roman', serif"
							sm-width="100%"
						>
							It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.{" \n\n"}
						</Text>
					</Box>
				</Box>
			</Box>
			<Box display="flex" flex-wrap="wrap">
				<Box padding="20px 20px 20px 20px" width="10%" display="grid" md-display="none">
					<Box display="flex" align-items="center" />
				</Box>
				<Box
					padding="20px 20px 20px 20px"
					display="flex"
					width="90%"
					md-width="100%"
					sm-flex-wrap="wrap"
				>
					<Box
						display="flex"
						justify-content="flex-start"
						align-items="flex-start"
						width="20%"
						md-width="25%"
						sm-width="100%"
						sm-margin="0px 0px 10px 0px"
					>
						<Text font="normal 300 18px/1.5 --fontFamily-serifTimes" color="--light" margin="0px 0px 0px 0px">
							(02 - 04)
						</Text>
					</Box>
					<Box
						display="flex"
						justify-content="center"
						align-items="flex-start"
						width="20%"
						md-width="25%"
						sm-width="100%"
						sm-justify-content="flex-start"
						sm-margin="0px 0px 10px 0px"
						sm-padding="0px 0px 0px 0px"
					>
						<Text font="normal 500 18px/1.5 --fontFamily-serifTimes" color="--light" margin="0px 0px 0px 0px">
							{"\n\n"}
						</Text>
						<Text font="normal 600 18px/1.5 --fontFamily-serifTimes" color="--light" margin="0px 0px 0px 0px" sm-margin="0px 0px 0px -7px">
							Work
						</Text>
					</Box>
					<Box
						display="flex"
						justify-content="flex-start"
						width="60%"
						align-items="center"
						sm-width="100%"
					>
						<Text font="--headline4" color="--light" margin="0px 0px 0px 0px" md-font="500 20px/1.3 Cambria, 'Hoefler Text', Utopia, 'Liberation Serif', 'Nimbus Roman No9 L Regular', Times, 'Times New Roman', serif">
							Don’t worry about sounding professional. Sound like you. There are over 1.5 billion websites out there, but your story is what’s going to separate this one from the rest. If you read the words back and don’t hear your own voice in your head, that’s a good sign you still have more work to do.
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section background="--color-orange" padding="150px 0 150px 0" md-padding="70px 0 70px 0" sm-padding="40px 0px 40px 0px">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box display="flex" flex-wrap="wrap" width="100%">
				<Box padding="20px 20px 20px 20px" width="10%" display="grid" md-display="none">
					<Box display="flex" align-items="center" />
				</Box>
				<Box padding="20px 20px 20px 20px" display="flex" width="90%" md-width="100%">
					<Box display="flex" justify-content="flex-start" align-items="flex-start" width="20%">
						<Text font="normal 600 18px/1.5 --fontFamily-serifTimes" color="--light" margin="0px 0px 0px 0px">
							01{"\n\n"}
						</Text>
					</Box>
					<Box display="flex" justify-content="flex-start" width="80%" align-items="center">
						<Text
							font="--headline1"
							color="--light"
							margin="0px 0px 0px 0px"
							width="100%"
							md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
							sm-font="normal 700 38px/1.1 &quot;Inter&quot;, sans-serif"
						>
							Project 01
						</Text>
					</Box>
				</Box>
			</Box>
			<Box display="flex" flex-wrap="wrap" width="100%">
				<Box padding="20px 20px 20px 20px" width="10%" display="grid" md-display="none">
					<Box display="flex" align-items="center" />
				</Box>
				<Box padding="20px 20px 20px 20px" display="flex" width="90%" md-width="100%">
					<Box display="flex" justify-content="flex-start" align-items="flex-start" width="20%">
						<Text font="normal 600 18px/1.5 --fontFamily-serifTimes" color="--light" margin="0px 0px 0px 0px">
							02
						</Text>
					</Box>
					<Box display="flex" justify-content="flex-start" width="80%" align-items="center">
						<Text
							font="--headline1"
							color="--light"
							margin="0px 0px 0px 0px"
							width="100%"
							md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
							sm-font="normal 700 38px/1.1 &quot;Inter&quot;, sans-serif"
						>
							Project 02
						</Text>
					</Box>
				</Box>
			</Box>
			<Box display="flex" flex-wrap="wrap" width="100%">
				<Box padding="20px 20px 20px 20px" width="10%" display="grid" md-display="none">
					<Box display="flex" align-items="center" />
				</Box>
				<Box padding="20px 20px 20px 20px" display="flex" width="90%" md-width="100%">
					<Box display="flex" justify-content="flex-start" align-items="flex-start" width="20%">
						<Text font="normal 600 18px/1.5 --fontFamily-serifTimes" color="--light" margin="0px 0px 0px 0px">
							03
						</Text>
					</Box>
					<Box display="flex" justify-content="flex-start" width="80%" align-items="center">
						<Text
							font="--headline1"
							color="--light"
							margin="0px 0px 0px 0px"
							width="100%"
							md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
							sm-font="normal 700 38px/1.1 &quot;Inter&quot;, sans-serif"
						>
							Project 03
						</Text>
					</Box>
				</Box>
			</Box>
			<Box display="flex" flex-wrap="wrap" width="100%">
				<Box padding="20px 20px 20px 20px" width="10%" display="grid" md-display="none">
					<Box display="flex" align-items="center" />
				</Box>
				<Box padding="20px 20px 20px 20px" display="flex" width="90%" md-width="100%">
					<Box display="flex" justify-content="flex-start" align-items="flex-start" width="20%">
						<Text font="normal 600 18px/1.5 --fontFamily-serifTimes" color="--light" margin="0px 0px 0px 0px">
							04
						</Text>
					</Box>
					<Box display="flex" justify-content="flex-start" width="80%" align-items="center">
						<Text
							font="--headline1"
							color="--light"
							margin="0px 0px 0px 0px"
							width="100%"
							md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
							sm-font="normal 700 38px/1.1 &quot;Inter&quot;, sans-serif"
						>
							Project 04
						</Text>
					</Box>
				</Box>
			</Box>
			<Box display="flex" flex-wrap="wrap" width="100%">
				<Box padding="20px 20px 20px 20px" width="10%" display="grid" md-display="none">
					<Box display="flex" align-items="center" />
				</Box>
				<Box padding="20px 20px 20px 20px" display="flex" width="90%" md-width="100%">
					<Box display="flex" justify-content="flex-start" align-items="flex-start" width="20%">
						<Text font="normal 600 18px/1.5 --fontFamily-serifTimes" color="--light" margin="0px 0px 0px 0px">
							05
						</Text>
					</Box>
					<Box display="flex" justify-content="flex-start" width="80%" align-items="center">
						<Text
							font="--headline1"
							color="--light"
							margin="0px 0px 0px 0px"
							width="100%"
							md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
							sm-font="normal 700 38px/1.1 &quot;Inter&quot;, sans-serif"
						>
							Project 05
						</Text>
					</Box>
				</Box>
			</Box>
			<Box display="flex" flex-wrap="wrap" width="100%">
				<Box padding="20px 20px 20px 20px" width="10%" display="grid" md-display="none">
					<Box display="flex" align-items="center" />
				</Box>
				<Box padding="20px 20px 20px 20px" display="flex" width="90%" md-width="100%">
					<Box display="flex" justify-content="flex-start" align-items="flex-start" width="20%">
						<Text font="normal 600 18px/1.5 --fontFamily-serifTimes" color="--light" margin="0px 0px 0px 0px">
							06
						</Text>
					</Box>
					<Box display="flex" justify-content="flex-start" width="80%" align-items="center">
						<Text
							font="--headline1"
							color="--light"
							margin="0px 0px 0px 0px"
							width="100%"
							md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
							sm-font="normal 700 38px/1.1 &quot;Inter&quot;, sans-serif"
						>
							Project 06
						</Text>
					</Box>
				</Box>
			</Box>
			<Box display="flex" flex-wrap="wrap" width="100%">
				<Box padding="20px 20px 20px 20px" width="10%" display="grid" md-display="none">
					<Box display="flex" align-items="center" />
				</Box>
				<Box padding="20px 20px 20px 20px" display="flex" width="90%" md-width="100%">
					<Box display="flex" justify-content="flex-start" align-items="flex-start" width="20%">
						<Text font="normal 600 18px/1.5 --fontFamily-serifTimes" color="--light" margin="0px 0px 0px 0px">
							07
						</Text>
					</Box>
					<Box display="flex" justify-content="flex-start" width="80%" align-items="center">
						<Text
							font="--headline1"
							color="--light"
							margin="0px 0px 0px 0px"
							width="100%"
							md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
							sm-font="normal 700 38px/1.1 &quot;Inter&quot;, sans-serif"
						>
							Project 07
						</Text>
					</Box>
				</Box>
			</Box>
			<Box display="flex" flex-wrap="wrap" width="100%">
				<Box padding="20px 20px 20px 20px" width="10%" display="grid" md-display="none">
					<Box display="flex" align-items="center" />
				</Box>
				<Box padding="20px 20px 20px 20px" display="flex" width="90%" md-width="100%">
					<Box display="flex" justify-content="flex-start" align-items="flex-start" width="20%">
						<Text font="normal 600 18px/1.5 --fontFamily-serifTimes" color="--light" margin="0px 0px 0px 0px">
							08
						</Text>
					</Box>
					<Box display="flex" justify-content="flex-start" width="80%" align-items="center">
						<Text
							font="--headline1"
							color="--light"
							margin="0px 0px 0px 0px"
							width="100%"
							md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
							sm-font="normal 700 38px/1.1 &quot;Inter&quot;, sans-serif"
						>
							Project 08
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section background="--color-orange" padding="150px 0 150px 0" md-padding="70px 0 70px 0" sm-padding="40px 0px 40px 0px">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box display="flex" flex-wrap="wrap" margin="0px 0px 80px 0px">
				<Box padding="20px 20px 20px 20px" width="10%" display="grid" md-display="none">
					<Box display="flex" align-items="center" />
				</Box>
				<Box
					padding="20px 20px 20px 20px"
					display="flex"
					width="90%"
					md-width="100%"
					sm-flex-wrap="wrap"
				>
					<Box
						display="flex"
						justify-content="flex-start"
						align-items="flex-start"
						width="20%"
						md-width="25%"
						sm-width="100%"
						sm-margin="0px 0px 10px 0px"
					>
						<Hr width="100%" color="--light" />
					</Box>
					<Box
						display="flex"
						justify-content="center"
						align-items="flex-start"
						width="20%"
						md-width="25%"
						sm-width="100%"
						sm-justify-content="flex-start"
						sm-margin="0px 0px 10px 0px"
					>
						<Text font="normal 600 18px/1.5 --fontFamily-serifTimes" color="--light" margin="0px 0px 0px 0px">
							My CV
						</Text>
					</Box>
					<Box
						display="flex"
						justify-content="flex-start"
						width="60%"
						align-items="center"
						sm-width="100%"
					>
						<Text font="--headline4" color="--light" margin="0px 0px 0px 0px" md-font="500 20px/1.3 Cambria, 'Hoefler Text', Utopia, 'Liberation Serif', 'Nimbus Roman No9 L Regular', Times, 'Times New Roman', serif">
							I’ve held a variety of professional writing positions in advertising, marketing, journalism and the entertainment industry, where I’ve been responsible for delivering everything from social copy to 10,000 word features.{" "}
							<br />
							<br />
							In addition, I’ve published three novels and have placed short stories in several prominent literary magaxzines. My latest novel was optioned by a major film production company for TV development.{" "}
							<br />
							<br />
							I’m based in NYC, but available to travel for longer consulting engagements.{" \n\n"}
						</Text>
					</Box>
				</Box>
			</Box>
			<Box display="flex" flex-wrap="wrap">
				<Box padding="20px 20px 20px 20px" width="10%" display="grid" md-display="none">
					<Box display="flex" align-items="center" />
				</Box>
				<Box
					padding="20px 20px 20px 20px"
					display="flex"
					width="90%"
					md-width="100%"
					sm-flex-wrap="wrap"
				>
					<Box
						display="flex"
						justify-content="flex-start"
						align-items="flex-start"
						width="20%"
						md-width="25%"
						sm-width="100%"
						sm-margin="0px 0px 10px 0px"
					>
						<Hr width="100%" color="--light" />
					</Box>
					<Box
						display="flex"
						justify-content="center"
						align-items="flex-start"
						width="20%"
						md-width="25%"
						sm-width="100%"
						sm-justify-content="flex-start"
						sm-margin="0px 0px 10px 0px"
					>
						<Text font="normal 600 18px/1.5 --fontFamily-serifTimes" color="--light" margin="0px 0px 0px 0px">
							About
						</Text>
					</Box>
					<Box
						display="flex"
						justify-content="flex-start"
						width="60%"
						align-items="center"
						sm-width="100%"
					>
						<Text font="--headline4" color="--light" margin="0px 0px 0px 0px" md-font="500 20px/1.3 Cambria, 'Hoefler Text', Utopia, 'Liberation Serif', 'Nimbus Roman No9 L Regular', Times, 'Times New Roman', serif">
							All works on this site are the property of my clients and are featured here with their express permission.{" \n\n"}
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section background="--color-orange" padding="150px 0 150px 0" md-padding="70px 0 70px 0" sm-padding="40px 0px 40px 0px">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				padding="20px 20px 20px 20px"
				display="grid"
				width="90%"
				md-width="100%"
				md-display="flex"
				md-align-items="center"
				md-justify-content="center"
			>
				<Box display="flex" justify-content="flex-start" align-items="center">
					<Text
						margin="0px 0px 0px 0px"
						color="--light"
						font="--headline1"
						border-width="0px 0px 1px 0px"
						border-style="solid"
						sm-display="flex"
					>
						<Link
							href="#"
							text-decoration-line="initial"
							color="--light"
							border-color="--color-light"
							md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
							sm-font="normal 700 38px/1.1 &quot;Inter&quot;, sans-serif"
						>
							Get in Touch.
						</Link>
					</Text>
				</Box>
			</Box>
		</Section>
		<Section background="--color-orange" quarkly-title="Footer" padding="90px 0 90px 0" sm-padding="40px 0px 40px 0px">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				padding="20px 20px 20px 20px"
				width="30%"
				display="grid"
				md-width="33.3333%"
				sm-width="100%"
			>
				<Box display="flex" align-items="center">
					<Text margin="0px 0px 0px 0px" font="--base" color="--light">
						Suhama
					</Text>
				</Box>
			</Box>
			<Box
				padding="20px 20px 20px 20px"
				width="30%"
				display="grid"
				md-width="33.3333%"
				sm-width="100%"
			>
				<Box display="flex" align-items="center">
					<Text margin="0px 0px 0px 0px" font="--base" color="--light">
						(555) 555-5555
						<br />
						email@example.com
					</Text>
				</Box>
			</Box>
			<Box
				padding="20px 20px 20px 20px"
				width="30%"
				display="grid"
				md-width="33.3333%"
				sm-width="100%"
			>
				<Box display="flex" align-items="center">
					<Text margin="0px 0px 0px 0px" font="--base" color="--light">
						123 Demo Street New York,{" "}
						<br />
						NY 12345
					</Text>
				</Box>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"60da14fa3f4eb1001ea27687"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});