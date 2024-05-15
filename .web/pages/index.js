/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { Badge, Box, Breadcrumb, BreadcrumbItem, Button, Center, Code, Flex, Heading, HStack, Image as ChakraImage, Link, ListItem, OrderedList, SimpleGrid, Spacer, Text, UnorderedList, VStack } from "@chakra-ui/react"
import { EmailIcon, MoonIcon, SunIcon } from "@chakra-ui/icons"
import "focus-visible/dist/focus-visible"
import "katex/dist/katex.min.css"
import { ColorModeContext, EventLoopContext } from "/utils/context"
import { Event, isTrue } from "/utils/state"
import NextLink from "next/link"
import ReactMarkdown from "react-markdown"
import remarkMath from "remark-math"
import remarkGfm from "remark-gfm"
import rehypeKatex from "rehype-katex"
import rehypeRaw from "rehype-raw"
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter"
import oneLight from "react-syntax-highlighter/dist/cjs/styles/prism/one-light"
import oneDark from "react-syntax-highlighter/dist/cjs/styles/prism/one-dark"
import python from "react-syntax-highlighter/dist/cjs/languages/prism/python"
import NextHead from "next/head"



        function ComponentMap_0fb8c7bde874ca761b52e7c8e8eb76d3 () {
            const [ colorMode, toggleColorMode ] = useContext(ColorModeContext)
            return (
                {"h1": ({node, children, ...props}) => <Heading as={`h1`} size={`2xl`} sx={{"marginY": "0.5em"}} {...props}>   {children} </Heading>, "h2": ({node, children, ...props}) => <Heading as={`h2`} size={`xl`} sx={{"marginY": "0.5em"}} {...props}>   {children} </Heading>, "h3": ({node, children, ...props}) => <Heading as={`h3`} size={`lg`} sx={{"marginY": "0.5em"}} {...props}>   {children} </Heading>, "h4": ({node, children, ...props}) => <Heading as={`h4`} size={`md`} sx={{"marginY": "0.5em"}} {...props}>   {children} </Heading>, "h5": ({node, children, ...props}) => <Heading as={`h5`} size={`sm`} sx={{"marginY": "0.5em"}} {...props}>   {children} </Heading>, "h6": ({node, children, ...props}) => <Heading as={`h6`} size={`xs`} sx={{"marginY": "0.5em"}} {...props}>   {children} </Heading>, "p": ({node, children, ...props}) => <Text sx={{"marginY": "1em"}} {...props}>   {children} </Text>, "ul": ({node, children, ...props}) => <UnorderedList sx={{"marginY": "1em"}}>   {children} </UnorderedList>, "ol": ({node, children, ...props}) => <OrderedList sx={{"marginY": "1em"}}>   {children} </OrderedList>, "li": ({node, children, ...props}) => <ListItem sx={{"marginY": "0.5em"}}>   {children} </ListItem>, "a": ({node, children, ...props}) => <Link as={``} {...props}>   {children} </Link>, "code": ({node, inline, className, children, ...props}) => {     const match = (className || '').match(/language-(?<lang>.*)/);     const language = match ? match[1] : '';     if (language) {     (async () => {       try {         const module = await import(`react-syntax-highlighter/dist/cjs/languages/prism/${language}`);         SyntaxHighlighter.registerLanguage(language, module.default);       } catch (error) {         console.error(`Error importing language module for ${language}:`, error);       }     })();   }     return inline ? (         <Code {...props}>   {children} </Code>     ) : (         <SyntaxHighlighter css={{"marginY": "1em"}} customStyle={{"marginY": "1em"}} language={language} style={isTrue((colorMode === "light")) ? oneLight : oneDark} {...props} children={children}/>     );       }, "codeblock": ({node, children, ...props}) => <SyntaxHighlighter css={{"marginY": "1em"}} customStyle={{"marginY": "1em"}} language={`python`} style={isTrue((colorMode === "light")) ? oneLight : oneDark} {...props} children={children}/>}
            )
        }
        

export function Button_ef04e6f1e5c4a0a34d56cc0f86667aad () {
  const [ colorMode, toggleColorMode ] = useContext(ColorModeContext)
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_9922dd3e837b9e087c86a2522c2c93f8 = useCallback(toggleColorMode, [addEvents, Event, colorMode, toggleColorMode])

  return (
    <Button colorScheme={`gray`} onClick={on_click_9922dd3e837b9e087c86a2522c2c93f8} sx={{"_light": {"color": "black"}, "_dark": {"color": "white"}}}>
  <Fragment_c4944d8b5ece4892844e987a2ddfe4ae/>
</Button>
  )
}

export function Fragment_c4944d8b5ece4892844e987a2ddfe4ae () {
  const [ colorMode, toggleColorMode ] = useContext(ColorModeContext)


  return (
    <Fragment>
  {isTrue((colorMode === "light")) ? (
  <Fragment>
  <SunIcon/>
</Fragment>
) : (
  <Fragment>
  <MoonIcon/>
</Fragment>
)}
</Fragment>
  )
}

export default function Component() {

  return (
    <Fragment>
  <VStack sx={{"@keyframes dots": {"0%": {"backgroundPosition": "0 0"}, "100%": {"backgroundPosition": "40px 40px"}}, "animation": "dots 4s linear infinite alternate-reverse both", "_light": {"background": "radial-gradient(circle,rgba(0,0,0,0.35) 1px, transparent 1px)", "backgroundSize": "25px 25px"}, "background": "radial-gradient(circle,rgba(255,255,255,0.09) 1px, transparent 1px)", "backgroundSize": "25px 25px"}}>
  <HStack sx={{"widht": "100%", "height": "50px", "padding": ["0rem 1rem", "0rem 1rem", "0rem 1rem", "0rem 1rem", "0rem 1rem"], "transition": "all 550ms ease"}}>
  <HStack alignItems={`center`} justifyContent={`center`}>
  <Box>
  <EmailIcon sx={{"_dark": {"color": "rgba(255,255,255,0.5)"}}}/>
</Box>
  <Box>
  <Text sx={{"_dark": {"color": "rgba(255,255,255,0.5)"}}}>
  {`juanglezm3@gmail.com`}
</Text>
</Box>
</HStack>
  <Spacer/>
  <Button_ef04e6f1e5c4a0a34d56cc0f86667aad/>
</HStack>
  <Box sx={{"alignItems": "center"}}>
  <Box sx={{"display": ["none", "block", "block", "block"]}}>
  <VStack sx={{"widht": "100%", "height": "84vh", "padding": "15rem 0rem", "alignItems": "center", "justifyContent": "start"}}>
  <HStack spacing={`1.75rem`}>
  <Heading sx={{"fontSize": ["1.25em", "1.5em", "2em", "2.5em", "3em", "3.5em", "4em", "4.5em", "5em"], "fontWeight": "900", "_dark": {"background": "linear-gradient(to right, #e1e1e1,#757575)", "backgroundClip": "text"}}}>
  {`Hi - I'm Juan Gonzalez`}
</Heading>
  <Heading size={`2xl`} sx={{"@keyframes wave": {"0%": {"transform": "rotate(45deg)"}, "100%": {"transform": "rotate(-15deg)"}}, "animation": "wave 0.8s cubic-bezier(0.25,0.46,0.45,0.94) infinite alternate-reverse both", "fontSize": ["1.25em", "1.5em", "2em", "2.5em", "3em", "3.5em", "4em", "4.5em", "5em"]}}>
  {`👋`}
</Heading>
</HStack>
  <HStack spacing={`1rem`}>
  <Badge sx={{"padding": ["0.15rem 0.35rem", "0.15rem 0.35rem", "0.15rem 1rem", "0.15rem 1rem", "0.15rem 1rem"]}} variant={`solid`}>
  {`ML Engineer`}
</Badge>
  <Badge sx={{"padding": ["0.15rem 0.35rem", "0.15rem 0.35rem", "0.15rem 1rem", "0.15rem 1rem", "0.15rem 1rem"]}} variant={`solid`}>
  {`Python Developer`}
</Badge>
  <Badge sx={{"padding": ["0.15rem 0.35rem", "0.15rem 0.35rem", "0.15rem 1rem", "0.15rem 1rem", "0.15rem 1rem"]}} variant={`solid`}>
  {`Business Intelligence Analyst`}
</Badge>
</HStack>
  <Breadcrumb>
  <BreadcrumbItem>
  <HStack>
  <ChakraImage htmlHeight={`24px`} htmlWidth={`24px`} src={`github_logo.png`} sx={{"_dark": {"filter": "brightness(0) invert(1)"}}}/>
  <Link as={NextLink} href={`https://github.com/JuanGM07`} isExternal={true} sx={{"_dark": {"color": "rgba(255,255,255,0.7)"}}}>
  {`GitHub`}
</Link>
</HStack>
</BreadcrumbItem>
  <BreadcrumbItem>
  <HStack>
  <ChakraImage htmlHeight={`24px`} htmlWidth={`24px`} src={`gorjeo.png`} sx={{"_dark": {"filter": "brightness(0) invert(1)"}}}/>
  <Link as={NextLink} href={`https://twitter.com/TranslatorData`} isExternal={true} sx={{"_dark": {"color": "rgba(255,255,255,0.7)"}}}>
  {`Twitter`}
</Link>
</HStack>
</BreadcrumbItem>
  <BreadcrumbItem>
  <HStack>
  <ChakraImage htmlHeight={`24px`} htmlWidth={`24px`} src={`linkedin.png`} sx={{"_dark": {"filter": "brightness(0) invert(1)"}}}/>
  <Link as={NextLink} href={`https://www.linkedin.com/in/jgm-datascience/`} isExternal={true} sx={{"_dark": {"color": "rgba(255,255,255,0.7)"}}}>
  {`LinkedIn`}
</Link>
</HStack>
</BreadcrumbItem>
</Breadcrumb>
</VStack>
</Box>
  <Box sx={{"display": ["block", "none", "none", "none"]}}>
  <VStack sx={{"widht": "100%", "height": "84vh", "padding": "15rem 0rem", "alignItems": "center", "justifyContent": "start"}}>
  <HStack spacing={`1.75rem`}>
  <Heading sx={{"fontSize": ["1.25em", "1.5em", "2em", "2.5em", "3em", "3.5em", "4em", "4.5em", "5em"], "fontWeight": "900", "_dark": {"background": "linear-gradient(to right, #e1e1e1,#757575)", "backgroundClip": "text"}}}>
  {`Hi - I'm Juan Gonzalez`}
</Heading>
  <Heading size={`2xl`} sx={{"@keyframes wave": {"0%": {"transform": "rotate(45deg)"}, "100%": {"transform": "rotate(-15deg)"}}, "animation": "wave 0.8s cubic-bezier(0.25,0.46,0.45,0.94) infinite alternate-reverse both", "fontSize": ["1.25em", "1.5em", "2em", "2.5em", "3em", "3.5em", "4em", "4.5em", "5em"]}}>
  {`👋`}
</Heading>
</HStack>
  <VStack spacing={`1.25rem`}>
  <Badge sx={{"padding": ["0.15rem 0.35rem", "0.15rem 0.35rem", "0.15rem 1rem", "0.15rem 1rem", "0.15rem 1rem"]}} variant={`solid`}>
  {`ML Engineer`}
</Badge>
  <Badge sx={{"padding": ["0.15rem 0.35rem", "0.15rem 0.35rem", "0.15rem 1rem", "0.15rem 1rem", "0.15rem 1rem"]}} variant={`solid`}>
  {`Python Developer`}
</Badge>
  <Badge sx={{"padding": ["0.15rem 0.35rem", "0.15rem 0.35rem", "0.15rem 1rem", "0.15rem 1rem", "0.15rem 1rem"]}} variant={`solid`}>
  {`Business Intelligence Analyst`}
</Badge>
</VStack>
  <Breadcrumb>
  <BreadcrumbItem>
  <HStack>
  <ChakraImage htmlHeight={`24px`} htmlWidth={`24px`} src={`github_logo.png`} sx={{"_dark": {"filter": "brightness(0) invert(1)"}}}/>
  <Link as={NextLink} href={`https://github.com/JuanGM07`} isExternal={true} sx={{"_dark": {"color": "rgba(255,255,255,0.7)"}}}>
  {`GitHub`}
</Link>
</HStack>
</BreadcrumbItem>
  <BreadcrumbItem>
  <HStack>
  <ChakraImage htmlHeight={`24px`} htmlWidth={`24px`} src={`gorjeo.png`} sx={{"_dark": {"filter": "brightness(0) invert(1)"}}}/>
  <Link as={NextLink} href={`https://twitter.com/TranslatorData`} isExternal={true} sx={{"_dark": {"color": "rgba(255,255,255,0.7)"}}}>
  {`Twitter`}
</Link>
</HStack>
</BreadcrumbItem>
  <BreadcrumbItem>
  <HStack>
  <ChakraImage htmlHeight={`24px`} htmlWidth={`24px`} src={`linkedin.png`} sx={{"_dark": {"filter": "brightness(0) invert(1)"}}}/>
  <Link as={NextLink} href={`https://www.linkedin.com/in/jgm-datascience/`} isExternal={true} sx={{"_dark": {"color": "rgba(255,255,255,0.7)"}}}>
  {`LinkedIn`}
</Link>
</HStack>
</BreadcrumbItem>
</Breadcrumb>
</VStack>
</Box>
</Box>
  <Box sx={{"widht": "100%"}}>
  <Box sx={{"display": ["none", "block", "block", "block"]}}>
  <VStack>
  <VStack>
  <Heading sx={{"fontSize": ["2em", "2.85em", "4em", "5em"], "fontWeight": "500", "_dark": {"background": "linear-gradient(to right, #e1e1e1,#757575)", "backgroundClip": "text"}, "_light": {"background": "repeating-linear-gradient(to right, #6AA3CF 0%, #231421 100%)", "-webkit-background-clip": "text", "-webkit-text-fill-color": "transparent"}}}>
  {`Who am I?`}
</Heading>
  <Box sx={{"widht": "100%", "padding": "20", "fontSize": ["0.5em", "0.6em", "0.7em", "0.8em", "0.9em", "1em", "1.1em", "1.2em"]}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#9e9e9e"}}}>
  {`
                    Hi I am Juan Gonzalez and I am 20 years old. I am currently studying mechanical engineering, 
                    but my passion is programming and computer science. Right now my focus is on creating ML models trough 
                    free APIS or free DB, trying to solve a problem that could happen in real life. Then I deploy it, on some 
                    cloud platform, or maybe only as an insight in some BI platform like tableau.
                    `}
</Text>
</Box>
  <Flex>
  <VStack alignItems={`center`} sx={{"fontSize": ["0.6em", "0.7em", "0.8em", "0.9em", "1em", "1.1em", "1.2em"]}}>
  <Box sx={{"_light": {"background": "linear-gradient(to top left, #62B4FC 0%, #231421 66%)", "-webkit-background-clip": "text", "-webkit-text-fill-color": "transparent"}, "_dark": {"background": "linear-gradient(to top, #CFCFCF 0%, #698DA6 100%)", "-webkit-background-clip": "text", "-webkit-text-fill-color": "transparent"}, "fontSize": ["0.6em", "0.7em", "0.8em", "0.9em", "1em", "1.1em", "1.2em"]}}>
  <ReactMarkdown rehypePlugins={[rehypeKatex, rehypeRaw]} remarkPlugins={[remarkMath, remarkGfm]} components={ComponentMap_0fb8c7bde874ca761b52e7c8e8eb76d3()}>
  {`## My Skills`}
</ReactMarkdown>
</Box>
  <Box sx={{"width": "130px", "alignItems": "right"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#9e9e9e"}}}>
  {`➱Python`}
</Text>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#9e9e9e"}}}>
  {`➱SQL`}
</Text>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#9e9e9e"}}}>
  {`➱Scikit-Learn`}
</Text>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#9e9e9e"}}}>
  {`➱Tableau`}
</Text>
</Box>
</VStack>
  <VStack alignItems={`center`} sx={{"fontSize": ["0.6em", "0.7em", "0.8em", "0.9em", "1em", "1.1em", "1.2em"]}}>
  <Box sx={{"_light": {"background": "linear-gradient(to top left, #62B4FC 0%, #231421 66%)", "-webkit-background-clip": "text", "-webkit-text-fill-color": "transparent"}, "_dark": {"background": "linear-gradient(to top, #CFCFCF 0%, #698DA6 100%)", "-webkit-background-clip": "text", "-webkit-text-fill-color": "transparent"}}}>
  <ReactMarkdown rehypePlugins={[rehypeKatex, rehypeRaw]} remarkPlugins={[remarkMath, remarkGfm]} components={ComponentMap_0fb8c7bde874ca761b52e7c8e8eb76d3()}>
  {`## Learning...`}
</ReactMarkdown>
</Box>
  <Box sx={{"width": "200px"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#9e9e9e"}}}>
  {`➱Tensor Flow`}
</Text>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#9e9e9e"}}}>
  {`➱AWS`}
</Text>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#9e9e9e"}}}>
  {`➱Airflow`}
</Text>
</Box>
</VStack>
</Flex>
  <Heading sx={{"fontSize": ["2em", "2.85em", "4em", "5em"], "fontWeight": "500", "_dark": {"background": "linear-gradient(to right, #e1e1e1,#757575)", "backgroundClip": "text"}, "_light": {"background": "repeating-linear-gradient(to right, #6AA3CF 0%, #231421 100%)", "-webkit-background-clip": "text", "-webkit-text-fill-color": "transparent"}, "padding": "2rem"}}>
  {`What I do?`}
</Heading>
  <Box sx={{"padding": "20", "fontSize": ["0.5em", "0.6em", "0.7em", "0.8em", "0.9em", "1em", "1.1em", "1.2em"], "widht": "100%"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#9e9e9e"}, "marginBottom": "20px"}}>
  {`
                        1. First of all, I put me in the situation that I have to solve a problem. The company where I am working 
                        needs to sell more, spend less, or any problem that I could imagine 
                        (obviously this process in real life has to be solved with information that I would have if I would work in that company).

                        `}
</Text>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#9e9e9e"}, "marginBottom": "20px"}}>
  {`
                        2. Then I get the data connecting to a free API, a database, csv, xslx, or any other file with others formats.

                        `}
</Text>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#9e9e9e"}, "marginBottom": "20px"}}>
  {`
                        3. Later, I transform this unstructured data with a pipeline formed with a lot of processes and fuctions, like convert it with
                        pandas in a dataframe, impute nulls with the mean or median, perhaps separate the categorical data from the numeric one, or map the categorical data and transform it into numerical data.

                        `}
</Text>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#9e9e9e"}, "marginBottom": "20px"}}>
  {`
                        4. When all my data is structured and clean. I divide it in training data and test data. Then I select a couple of algorithms that I think
                        that would bring me an accurated solution and I ajust the hyperparameters to find the best solution. This step provides me with a trained algorithm that solves my problem
                        (with a small error obviously).

                        `}
</Text>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#9e9e9e"}, "marginBottom": "20px"}}>
  {`
                        5. Having a trained algorithm that solves my problem, allows me to put it in production, integrated with a simple UI, making predictions of new data.
                        Or maybe the aim wasn't to make this, we only needed a dashboard with insights that will allow the executives to make better decisions.
                        In that case I would do it with tableau.

                        `}
</Text>
</Box>
  <Heading sx={{"fontSize": ["2em", "2.85em", "4em", "5em"], "fontWeight": "500", "_dark": {"background": "linear-gradient(to right, #e1e1e1,#757575)", "backgroundClip": "text"}, "_light": {"background": "repeating-linear-gradient(to right, #6AA3CF 0%, #231421 100%)", "-webkit-background-clip": "text", "-webkit-text-fill-color": "transparent"}, "padding": "2rem", "position": "sticky"}}>
  {`Projects`}
</Heading>
  <Box sx={{"widht": "100%", "padding": "2rem", "alignItems": "center", "justifyContent": "center", "fontSize": ["0.5em", "0.6em", "0.7em", "0.8em", "0.9em", "1em", "1.1em", "1.2em"]}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#9e9e9e"}}}>
  {`
                    I dont have experience in any company, but I worked in open source projects, and I had also make some projects to prove
                    my knolewdge on all that I said in the last section. Click in the tittle of the projects to go the page.
                    `}
</Text>
</Box>
  <HStack>
  <Link as={NextLink} href={`https://houseprice-predictor.streamlit.app/`} isExternal={true} sx={{"_light": {"background": "linear-gradient(to top left, #62B4FC 0%, #231421 66%)", "-webkit-background-clip": "text", "-webkit-text-fill-color": "transparent"}, "_dark": {"background": "linear-gradient(to top, #CFCFCF 0%, #698DA6 100%)", "-webkit-background-clip": "text", "-webkit-text-fill-color": "transparent"}, "marginBottom": "1rem", "fontSize": ["2em", "2.5em", "3em", "3.5em"]}}>
  {`House Price Predictor`}
</Link>
</HStack>
  <VStack>
  <ChakraImage htmlHeight={`500px`} htmlWidth={`500px`} src={`house_predictor.jpg`} sx={{"borderRadius": "20px", "border": "5px solid #4D7387", "marginBottom": "30px", "alignItems": "center", "justifyContent": "center"}}/>
</VStack>
  <Box sx={{"display": ["none", "none", "none", "block"]}}>
  <SimpleGrid columns={[3]} spacing={`1rem`}>
  <Box sx={{"border-radius": "25px", "-webkit-border-radius": "36px 36px 36px 36px", "-moz-border-radius": "36px 36px 36px 36px", "box-shadow": "17px 16px 20px rgba(0, 0, 0, 0.4)", "border": "3px solid rgba(22, 99, 130, 0.3)", "justifyContent": "center", "alignItems": "center", "height": "2em", "width": "12em", "bg": "rgba(101,126,183,100)"}}>
  <Center sx={{"alignItems": "center", "height": "100%"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#CFCBDA"}}}>
  {`Scikit-Learn`}
</Text>
</Center>
</Box>
  <Box sx={{"border-radius": "25px", "-webkit-border-radius": "36px 36px 36px 36px", "-moz-border-radius": "36px 36px 36px 36px", "box-shadow": "17px 16px 20px rgba(0, 0, 0, 0.4)", "border": "3px solid rgba(22, 99, 130, 0.3)", "justifyContent": "center", "alignItems": "center", "height": "2em", "width": "12em", "bg": "rgba(101,126,183,100)"}}>
  <Center sx={{"alignItems": "center", "height": "100%"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#CFCBDA"}}}>
  {`Pandas`}
</Text>
</Center>
</Box>
  <Box sx={{"border-radius": "25px", "-webkit-border-radius": "36px 36px 36px 36px", "-moz-border-radius": "36px 36px 36px 36px", "box-shadow": "17px 16px 20px rgba(0, 0, 0, 0.4)", "border": "3px solid rgba(22, 99, 130, 0.3)", "justifyContent": "center", "alignItems": "center", "height": "2em", "width": "12em", "bg": "rgba(101,126,183,100)"}}>
  <Center sx={{"alignItems": "center", "height": "100%"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#CFCBDA"}}}>
  {`Numpy`}
</Text>
</Center>
</Box>
</SimpleGrid>
</Box>
  <Box sx={{"display": ["block", "none", "none", "none"]}}>
  <SimpleGrid columns={[1]} spacing={`1rem`}>
  <Box sx={{"border-radius": "25px", "-webkit-border-radius": "36px 36px 36px 36px", "-moz-border-radius": "36px 36px 36px 36px", "box-shadow": "17px 16px 20px rgba(0, 0, 0, 0.4)", "border": "3px solid rgba(22, 99, 130, 0.3)", "justifyContent": "center", "alignItems": "center", "height": "2em", "width": "12em", "bg": "rgba(101,126,183,100)"}}>
  <Center sx={{"alignItems": "center", "height": "100%"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#CFCBDA"}}}>
  {`Scikit-Learn`}
</Text>
</Center>
</Box>
  <Box sx={{"border-radius": "25px", "-webkit-border-radius": "36px 36px 36px 36px", "-moz-border-radius": "36px 36px 36px 36px", "box-shadow": "17px 16px 20px rgba(0, 0, 0, 0.4)", "border": "3px solid rgba(22, 99, 130, 0.3)", "justifyContent": "center", "alignItems": "center", "height": "2em", "width": "12em", "bg": "rgba(101,126,183,100)"}}>
  <Center sx={{"alignItems": "center", "height": "100%"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#CFCBDA"}}}>
  {`Pandas`}
</Text>
</Center>
</Box>
  <Box sx={{"border-radius": "25px", "-webkit-border-radius": "36px 36px 36px 36px", "-moz-border-radius": "36px 36px 36px 36px", "box-shadow": "17px 16px 20px rgba(0, 0, 0, 0.4)", "border": "3px solid rgba(22, 99, 130, 0.3)", "justifyContent": "center", "alignItems": "center", "height": "2em", "width": "12em", "bg": "rgba(101,126,183,100)"}}>
  <Center sx={{"alignItems": "center", "height": "100%"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#CFCBDA"}}}>
  {`Numpy`}
</Text>
</Center>
</Box>
</SimpleGrid>
</Box>
  <VStack sx={{"fontSize": ["0.5em", "0.6em", "0.7em", "0.8em", "0.9em", "1em", "1.1em", "1.2em"], "padding": "10"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#9e9e9e"}, "alignItems": "center", "justifyContent": "center", "marginBottom": "40px"}}>
  {`A house price predictor model based on the prices of the real state market of California.`}
</Text>
</VStack>
  <HStack>
  <Link as={NextLink} href={`https://databasequery.streamlit.app/`} isExternal={true} sx={{"_light": {"background": "linear-gradient(to top left, #62B4FC 0%, #231421 66%)", "-webkit-background-clip": "text", "-webkit-text-fill-color": "transparent"}, "_dark": {"background": "linear-gradient(to top, #CFCFCF 0%, #698DA6 100%)", "-webkit-background-clip": "text", "-webkit-text-fill-color": "transparent"}, "marginBottom": "50px", "fontSize": ["2em", "2.5em", "3em", "3.5em"]}}>
  {`Data Base Query`}
</Link>
</HStack>
  <VStack sx={{"marginRight": "800px"}}>
  <ChakraImage htmlHeight={`500px`} htmlWidth={`500px`} src={`databasequery.png`} sx={{"borderRadius": "20px", "border": "5px solid #4D7387", "marginBottom": "30px", "alignItems": "center", "justifyContent": "center"}}/>
</VStack>
  <Box sx={{"display": ["none", "none", "none", "block"]}}>
  <SimpleGrid columns={[3]} spacing={`1rem`}>
  <Box sx={{"border-radius": "25px", "-webkit-border-radius": "36px 36px 36px 36px", "-moz-border-radius": "36px 36px 36px 36px", "box-shadow": "17px 16px 20px rgba(0, 0, 0, 0.4)", "border": "3px solid rgba(22, 99, 130, 0.3)", "justifyContent": "center", "alignItems": "center", "height": "2em", "width": "12em", "bg": "rgba(101,126,183,100)"}}>
  <Center sx={{"alignItems": "center", "height": "100%"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#CFCBDA"}}}>
  {`LangChain`}
</Text>
</Center>
</Box>
  <Box sx={{"border-radius": "25px", "-webkit-border-radius": "36px 36px 36px 36px", "-moz-border-radius": "36px 36px 36px 36px", "box-shadow": "17px 16px 20px rgba(0, 0, 0, 0.4)", "border": "3px solid rgba(22, 99, 130, 0.3)", "justifyContent": "center", "alignItems": "center", "height": "2em", "width": "12em", "bg": "rgba(101,126,183,100)"}}>
  <Center sx={{"alignItems": "center", "height": "100%"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#CFCBDA"}}}>
  {`Pandas`}
</Text>
</Center>
</Box>
  <Box sx={{"border-radius": "25px", "-webkit-border-radius": "36px 36px 36px 36px", "-moz-border-radius": "36px 36px 36px 36px", "box-shadow": "17px 16px 20px rgba(0, 0, 0, 0.4)", "border": "3px solid rgba(22, 99, 130, 0.3)", "justifyContent": "center", "alignItems": "center", "height": "2em", "width": "12em", "bg": "rgba(101,126,183,100)"}}>
  <Center sx={{"alignItems": "center", "height": "100%"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#CFCBDA"}}}>
  {`SQL`}
</Text>
</Center>
</Box>
</SimpleGrid>
</Box>
  <Box sx={{"display": ["block", "none", "none", "none"]}}>
  <SimpleGrid columns={[1]} spacing={`1rem`}>
  <Box sx={{"border-radius": "25px", "-webkit-border-radius": "36px 36px 36px 36px", "-moz-border-radius": "36px 36px 36px 36px", "box-shadow": "17px 16px 20px rgba(0, 0, 0, 0.4)", "border": "3px solid rgba(22, 99, 130, 0.3)", "justifyContent": "center", "alignItems": "center", "height": "2em", "width": "12em", "bg": "rgba(101,126,183,100)"}}>
  <Center sx={{"alignItems": "center", "height": "100%"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#CFCBDA"}}}>
  {`LangChain`}
</Text>
</Center>
</Box>
  <Box sx={{"border-radius": "25px", "-webkit-border-radius": "36px 36px 36px 36px", "-moz-border-radius": "36px 36px 36px 36px", "box-shadow": "17px 16px 20px rgba(0, 0, 0, 0.4)", "border": "3px solid rgba(22, 99, 130, 0.3)", "justifyContent": "center", "alignItems": "center", "height": "2em", "width": "12em", "bg": "rgba(101,126,183,100)"}}>
  <Center sx={{"alignItems": "center", "height": "100%"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#CFCBDA"}}}>
  {`Pandas`}
</Text>
</Center>
</Box>
  <Box sx={{"border-radius": "25px", "-webkit-border-radius": "36px 36px 36px 36px", "-moz-border-radius": "36px 36px 36px 36px", "box-shadow": "17px 16px 20px rgba(0, 0, 0, 0.4)", "border": "3px solid rgba(22, 99, 130, 0.3)", "justifyContent": "center", "alignItems": "center", "height": "2em", "width": "12em", "bg": "rgba(101,126,183,100)"}}>
  <Center sx={{"alignItems": "center", "height": "100%"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#CFCBDA"}}}>
  {`SQL`}
</Text>
</Center>
</Box>
</SimpleGrid>
</Box>
  <VStack sx={{"fontSize": ["0.5em", "0.6em", "0.7em", "0.8em", "0.9em", "1em", "1.1em", "1.2em"]}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#9e9e9e"}, "alignItems": "center", "justifyContent": "center", "padding": "10"}}>
  {`A NL2SQL model to query a data base through the OpenAI API.`}
</Text>
</VStack>
  <HStack>
  <Link as={NextLink} href={`https://financeweb.streamlit.app/`} isExternal={true} sx={{"_light": {"background": "linear-gradient(to top left, #62B4FC 0%, #231421 66%)", "-webkit-background-clip": "text", "-webkit-text-fill-color": "transparent"}, "_dark": {"background": "linear-gradient(to top, #CFCFCF 0%, #698DA6 100%)", "-webkit-background-clip": "text", "-webkit-text-fill-color": "transparent"}, "marginBottom": "50px", "fontSize": ["2em", "2.5em", "3em", "3.5em"]}}>
  {`Finance Web`}
</Link>
</HStack>
  <VStack sx={{"marginRight": "800px"}}>
  <ChakraImage htmlHeight={`500px`} htmlWidth={`500px`} src={`finance_market.jpg`} sx={{"borderRadius": "20px", "border": "5px solid #4D7387", "marginBottom": "30px", "alignItems": "center", "justifyContent": "center"}}/>
</VStack>
  <Box sx={{"display": ["none", "none", "none", "block"]}}>
  <SimpleGrid columns={[3]} spacing={`1rem`}>
  <Box sx={{"border-radius": "25px", "-webkit-border-radius": "36px 36px 36px 36px", "-moz-border-radius": "36px 36px 36px 36px", "box-shadow": "17px 16px 20px rgba(0, 0, 0, 0.4)", "border": "3px solid rgba(22, 99, 130, 0.3)", "justifyContent": "center", "alignItems": "center", "height": "2em", "width": "12em", "bg": "rgba(101,126,183,100)"}}>
  <Center sx={{"alignItems": "center", "height": "100%"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#CFCBDA"}}}>
  {`TextBlob`}
</Text>
</Center>
</Box>
  <Box sx={{"border-radius": "25px", "-webkit-border-radius": "36px 36px 36px 36px", "-moz-border-radius": "36px 36px 36px 36px", "box-shadow": "17px 16px 20px rgba(0, 0, 0, 0.4)", "border": "3px solid rgba(22, 99, 130, 0.3)", "justifyContent": "center", "alignItems": "center", "height": "2em", "width": "12em", "bg": "rgba(101,126,183,100)"}}>
  <Center sx={{"alignItems": "center", "height": "100%"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#CFCBDA"}}}>
  {`Pandas`}
</Text>
</Center>
</Box>
  <Box sx={{"border-radius": "25px", "-webkit-border-radius": "36px 36px 36px 36px", "-moz-border-radius": "36px 36px 36px 36px", "box-shadow": "17px 16px 20px rgba(0, 0, 0, 0.4)", "border": "3px solid rgba(22, 99, 130, 0.3)", "justifyContent": "center", "alignItems": "center", "height": "2em", "width": "12em", "bg": "rgba(101,126,183,100)"}}>
  <Center sx={{"alignItems": "center", "height": "100%"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#CFCBDA"}}}>
  {`Requests`}
</Text>
</Center>
</Box>
</SimpleGrid>
</Box>
  <Box sx={{"display": ["block", "none", "none", "none"]}}>
  <SimpleGrid columns={[1]} spacing={`1rem`}>
  <Box sx={{"border-radius": "25px", "-webkit-border-radius": "36px 36px 36px 36px", "-moz-border-radius": "36px 36px 36px 36px", "box-shadow": "17px 16px 20px rgba(0, 0, 0, 0.4)", "border": "3px solid rgba(22, 99, 130, 0.3)", "justifyContent": "center", "alignItems": "center", "height": "2em", "width": "12em", "bg": "rgba(101,126,183,100)"}}>
  <Center sx={{"alignItems": "center", "height": "100%"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#CFCBDA"}}}>
  {`TextBlob`}
</Text>
</Center>
</Box>
  <Box sx={{"border-radius": "25px", "-webkit-border-radius": "36px 36px 36px 36px", "-moz-border-radius": "36px 36px 36px 36px", "box-shadow": "17px 16px 20px rgba(0, 0, 0, 0.4)", "border": "3px solid rgba(22, 99, 130, 0.3)", "justifyContent": "center", "alignItems": "center", "height": "2em", "width": "12em", "bg": "rgba(101,126,183,100)"}}>
  <Center sx={{"alignItems": "center", "height": "100%"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#CFCBDA"}}}>
  {`Pandas`}
</Text>
</Center>
</Box>
  <Box sx={{"border-radius": "25px", "-webkit-border-radius": "36px 36px 36px 36px", "-moz-border-radius": "36px 36px 36px 36px", "box-shadow": "17px 16px 20px rgba(0, 0, 0, 0.4)", "border": "3px solid rgba(22, 99, 130, 0.3)", "justifyContent": "center", "alignItems": "center", "height": "2em", "width": "12em", "bg": "rgba(101,126,183,100)"}}>
  <Center sx={{"alignItems": "center", "height": "100%"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#CFCBDA"}}}>
  {`Requests`}
</Text>
</Center>
</Box>
</SimpleGrid>
</Box>
  <VStack sx={{"fontSize": ["0.5em", "0.6em", "0.7em", "0.8em", "0.9em", "1em", "1.1em", "1.2em"]}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#9e9e9e"}, "alignItems": "center", "justifyContent": "center", "padding": "10"}}>
  {`A Finance web using YFinance library`}
</Text>
</VStack>
  <HStack>
  <Link as={NextLink} href={`https://blog-creator.streamlit.app/`} isExternal={true} sx={{"_light": {"background": "linear-gradient(to top left, #62B4FC 0%, #231421 66%)", "-webkit-background-clip": "text", "-webkit-text-fill-color": "transparent"}, "_dark": {"background": "linear-gradient(to top, #CFCFCF 0%, #698DA6 100%)", "-webkit-background-clip": "text", "-webkit-text-fill-color": "transparent"}, "marginBottom": "50px", "fontSize": ["2em", "2.5em", "3em", "3.5em"]}}>
  {`Blog Creator`}
</Link>
</HStack>
  <VStack sx={{"marginRight": "800px"}}>
  <ChakraImage htmlHeight={`500px`} htmlWidth={`500px`} src={`blog_creator.png`} sx={{"borderRadius": "20px", "border": "5px solid #4D7387", "marginBottom": "30px", "alignItems": "center", "justifyContent": "center"}}/>
</VStack>
  <Box sx={{"display": ["none", "none", "none", "block"]}}>
  <SimpleGrid columns={[3]} spacing={`1rem`}>
  <Box sx={{"border-radius": "25px", "-webkit-border-radius": "36px 36px 36px 36px", "-moz-border-radius": "36px 36px 36px 36px", "box-shadow": "17px 16px 20px rgba(0, 0, 0, 0.4)", "border": "3px solid rgba(22, 99, 130, 0.3)", "justifyContent": "center", "alignItems": "center", "height": "2em", "width": "12em", "bg": "rgba(101,126,183,100)"}}>
  <Center sx={{"alignItems": "center", "height": "100%"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#CFCBDA"}}}>
  {`LangChain`}
</Text>
</Center>
</Box>
  <Box sx={{"border-radius": "25px", "-webkit-border-radius": "36px 36px 36px 36px", "-moz-border-radius": "36px 36px 36px 36px", "box-shadow": "17px 16px 20px rgba(0, 0, 0, 0.4)", "border": "3px solid rgba(22, 99, 130, 0.3)", "justifyContent": "center", "alignItems": "center", "height": "2em", "width": "12em", "bg": "rgba(101,126,183,100)"}}>
  <Center sx={{"alignItems": "center", "height": "100%"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#CFCBDA"}}}>
  {`OpenAI API`}
</Text>
</Center>
</Box>
  <Box sx={{"border-radius": "25px", "-webkit-border-radius": "36px 36px 36px 36px", "-moz-border-radius": "36px 36px 36px 36px", "box-shadow": "17px 16px 20px rgba(0, 0, 0, 0.4)", "border": "3px solid rgba(22, 99, 130, 0.3)", "justifyContent": "center", "alignItems": "center", "height": "2em", "width": "12em", "bg": "rgba(101,126,183,100)"}}>
  <Center sx={{"alignItems": "center", "height": "100%"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#CFCBDA"}}}>
  {`TextBlob`}
</Text>
</Center>
</Box>
</SimpleGrid>
</Box>
  <Box sx={{"display": ["block", "none", "none", "none"]}}>
  <SimpleGrid columns={[1]} spacing={`1rem`}>
  <Box sx={{"border-radius": "25px", "-webkit-border-radius": "36px 36px 36px 36px", "-moz-border-radius": "36px 36px 36px 36px", "box-shadow": "17px 16px 20px rgba(0, 0, 0, 0.4)", "border": "3px solid rgba(22, 99, 130, 0.3)", "justifyContent": "center", "alignItems": "center", "height": "2em", "width": "12em", "bg": "rgba(101,126,183,100)"}}>
  <Center sx={{"alignItems": "center", "height": "100%"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#CFCBDA"}}}>
  {`LangChain`}
</Text>
</Center>
</Box>
  <Box sx={{"border-radius": "25px", "-webkit-border-radius": "36px 36px 36px 36px", "-moz-border-radius": "36px 36px 36px 36px", "box-shadow": "17px 16px 20px rgba(0, 0, 0, 0.4)", "border": "3px solid rgba(22, 99, 130, 0.3)", "justifyContent": "center", "alignItems": "center", "height": "2em", "width": "12em", "bg": "rgba(101,126,183,100)"}}>
  <Center sx={{"alignItems": "center", "height": "100%"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#CFCBDA"}}}>
  {`OPenAI API`}
</Text>
</Center>
</Box>
  <Box sx={{"border-radius": "25px", "-webkit-border-radius": "36px 36px 36px 36px", "-moz-border-radius": "36px 36px 36px 36px", "box-shadow": "17px 16px 20px rgba(0, 0, 0, 0.4)", "border": "3px solid rgba(22, 99, 130, 0.3)", "justifyContent": "center", "alignItems": "center", "height": "2em", "width": "12em", "bg": "rgba(101,126,183,100)"}}>
  <Center sx={{"alignItems": "center", "height": "100%"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#CFCBDA"}}}>
  {`TextBlob`}
</Text>
</Center>
</Box>
</SimpleGrid>
</Box>
  <VStack sx={{"fontSize": ["0.5em", "0.6em", "0.7em", "0.8em", "0.9em", "1em", "1.1em", "1.2em"]}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#9e9e9e"}, "alignItems": "center", "justifyContent": "center", "padding": "10"}}>
  {`A blog creator using langchain`}
</Text>
</VStack>
</VStack>
</VStack>
</Box>
  <Box sx={{"display": ["block", "none", "none", "none"]}}>
  <VStack>
  <VStack>
  <Heading sx={{"fontSize": ["2em", "2.85em", "4em", "5em"], "fontWeight": "500", "_dark": {"background": "linear-gradient(to right, #e1e1e1,#757575)", "backgroundClip": "text"}, "_light": {"background": "repeating-linear-gradient(to right, #6AA3CF 0%, #231421 100%)", "-webkit-background-clip": "text", "-webkit-text-fill-color": "transparent"}}}>
  {`Who am I?`}
</Heading>
  <Box sx={{"widht": "100%", "padding": "20", "fontSize": ["0.5em", "0.6em", "0.7em", "0.8em", "0.9em", "1em", "1.1em", "1.2em"]}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#9e9e9e"}}}>
  {`
                    Hi I am Juan Gonzalez and I am 20 years old. I am currently studying mechanical engineering, 
                    but my passion is programming and computer science. Right now my focus is on creating ML models trough 
                    free APIS or free DB, trying to solve a problem that could happen in real life. Then I deploy it, on some 
                    cloud platform, or maybe only as an insight in some BI platform like tableau.
                    `}
</Text>
</Box>
  <Flex>
  <VStack alignItems={`center`} sx={{"fontSize": ["0.6em", "0.7em", "0.8em", "0.9em", "1em", "1.1em", "1.2em"]}}>
  <Box sx={{"_light": {"background": "linear-gradient(to top left, #62B4FC 0%, #231421 66%)", "-webkit-background-clip": "text", "-webkit-text-fill-color": "transparent"}, "_dark": {"background": "linear-gradient(to top, #CFCFCF 0%, #698DA6 100%)", "-webkit-background-clip": "text", "-webkit-text-fill-color": "transparent"}, "fontSize": ["0.6em", "0.7em", "0.8em", "0.9em", "1em", "1.1em", "1.2em"]}}>
  <ReactMarkdown rehypePlugins={[rehypeKatex, rehypeRaw]} remarkPlugins={[remarkMath, remarkGfm]} components={ComponentMap_0fb8c7bde874ca761b52e7c8e8eb76d3()}>
  {`## My Skills`}
</ReactMarkdown>
</Box>
  <Box sx={{"width": "130px", "alignItems": "right"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#9e9e9e"}}}>
  {`➱Python`}
</Text>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#9e9e9e"}}}>
  {`➱SQL`}
</Text>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#9e9e9e"}}}>
  {`➱Scikit-Learn`}
</Text>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#9e9e9e"}}}>
  {`➱Tableau`}
</Text>
</Box>
</VStack>
  <VStack alignItems={`center`} sx={{"fontSize": ["0.6em", "0.7em", "0.8em", "0.9em", "1em", "1.1em", "1.2em"]}}>
  <Box sx={{"_light": {"background": "linear-gradient(to top left, #62B4FC 0%, #231421 66%)", "-webkit-background-clip": "text", "-webkit-text-fill-color": "transparent"}, "_dark": {"background": "linear-gradient(to top, #CFCFCF 0%, #698DA6 100%)", "-webkit-background-clip": "text", "-webkit-text-fill-color": "transparent"}}}>
  <ReactMarkdown rehypePlugins={[rehypeKatex, rehypeRaw]} remarkPlugins={[remarkMath, remarkGfm]} components={ComponentMap_0fb8c7bde874ca761b52e7c8e8eb76d3()}>
  {`## Learning...`}
</ReactMarkdown>
</Box>
  <Box sx={{"width": "200px"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#9e9e9e"}}}>
  {`➱Tensor Flow`}
</Text>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#9e9e9e"}}}>
  {`➱AWS`}
</Text>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#9e9e9e"}}}>
  {`➱Airflow`}
</Text>
</Box>
</VStack>
</Flex>
  <Heading sx={{"fontSize": ["2em", "2.85em", "4em", "5em"], "fontWeight": "500", "_dark": {"background": "linear-gradient(to right, #e1e1e1,#757575)", "backgroundClip": "text"}, "_light": {"background": "repeating-linear-gradient(to right, #6AA3CF 0%, #231421 100%)", "-webkit-background-clip": "text", "-webkit-text-fill-color": "transparent"}, "padding": "2rem"}}>
  {`What I do?`}
</Heading>
  <Box sx={{"padding": "20", "fontSize": ["0.5em", "0.6em", "0.7em", "0.8em", "0.9em", "1em", "1.1em", "1.2em"], "widht": "100%"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#9e9e9e"}, "marginBottom": "20px"}}>
  {`
                        1. First of all, I put me in the situation that I have to solve a problem. The company where I am working 
                        needs to sell more, spend less, or any problem that I could imagine 
                        (obviously this process in real life has to be solved with information that I would have if I would work in that company).

                        `}
</Text>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#9e9e9e"}, "marginBottom": "20px"}}>
  {`
                        2. Then I get the data connecting to a free API, a database, csv, xslx, or any other file with others formats.

                        `}
</Text>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#9e9e9e"}, "marginBottom": "20px"}}>
  {`
                        3. Later, I transform this unstructured data with a pipeline formed with a lot of processes and fuctions, like convert it with
                        pandas in a dataframe, impute nulls with the mean or median, perhaps separate the categorical data from the numeric one, or map the categorical data and transform it into numerical data.

                        `}
</Text>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#9e9e9e"}, "marginBottom": "20px"}}>
  {`
                        4. When all my data is structured and clean. I divide it in training data and test data. Then I select a couple of algorithms that I think
                        that would bring me an accurated solution and I ajust the hyperparameters to find the best solution. This step provides me with a trained algorithm that solves my problem
                        (with a small error obviously).

                        `}
</Text>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#9e9e9e"}, "marginBottom": "20px"}}>
  {`
                        5. Having a trained algorithm that solves my problem, allows me to put it in production, integrated with a simple UI, making predictions of new data.
                        Or maybe the aim wasn't to make this, we only needed a dashboard with insights that will allow the executives to make better decisions.
                        In that case I would do it with tableau.

                        `}
</Text>
</Box>
  <Heading sx={{"fontSize": ["2em", "2.85em", "4em", "5em"], "fontWeight": "500", "_dark": {"background": "linear-gradient(to right, #e1e1e1,#757575)", "backgroundClip": "text"}, "_light": {"background": "repeating-linear-gradient(to right, #6AA3CF 0%, #231421 100%)", "-webkit-background-clip": "text", "-webkit-text-fill-color": "transparent"}, "padding": "2rem", "position": "sticky"}}>
  {`Projects`}
</Heading>
  <Box sx={{"widht": "100%", "padding": "2rem", "alignItems": "center", "justifyContent": "center", "fontSize": ["0.5em", "0.6em", "0.7em", "0.8em", "0.9em", "1em", "1.1em", "1.2em"]}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#9e9e9e"}}}>
  {`
                    I dont have experience in any company, but I worked in open source projects, and I had also make some projects to prove
                    my knolewdge on all that I said in the last section. Click in the tittle of the projects to go the page.
                    `}
</Text>
</Box>
  <HStack>
  <Link as={NextLink} href={`https://houseprice-predictor.streamlit.app/`} isExternal={true} sx={{"_light": {"background": "linear-gradient(to top left, #62B4FC 0%, #231421 66%)", "-webkit-background-clip": "text", "-webkit-text-fill-color": "transparent"}, "_dark": {"background": "linear-gradient(to top, #CFCFCF 0%, #698DA6 100%)", "-webkit-background-clip": "text", "-webkit-text-fill-color": "transparent"}, "marginBottom": "1rem", "fontSize": ["2em", "2.5em", "3em", "3.5em"]}}>
  {`House Price Predictor`}
</Link>
</HStack>
  <VStack>
  <ChakraImage htmlHeight={`500px`} htmlWidth={`500px`} src={`house_predictor.jpg`} sx={{"borderRadius": "20px", "border": "5px solid #4D7387", "marginBottom": "30px", "alignItems": "center", "justifyContent": "center"}}/>
</VStack>
  <Box sx={{"display": ["none", "none", "none", "block"]}}>
  <SimpleGrid columns={[3]} spacing={`1rem`}>
  <Box sx={{"border-radius": "25px", "-webkit-border-radius": "36px 36px 36px 36px", "-moz-border-radius": "36px 36px 36px 36px", "box-shadow": "17px 16px 20px rgba(0, 0, 0, 0.4)", "border": "3px solid rgba(22, 99, 130, 0.3)", "justifyContent": "center", "alignItems": "center", "height": "2em", "width": "12em", "bg": "rgba(101,126,183,100)"}}>
  <Center sx={{"alignItems": "center", "height": "100%"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#CFCBDA"}}}>
  {`Scikit-Learn`}
</Text>
</Center>
</Box>
  <Box sx={{"border-radius": "25px", "-webkit-border-radius": "36px 36px 36px 36px", "-moz-border-radius": "36px 36px 36px 36px", "box-shadow": "17px 16px 20px rgba(0, 0, 0, 0.4)", "border": "3px solid rgba(22, 99, 130, 0.3)", "justifyContent": "center", "alignItems": "center", "height": "2em", "width": "12em", "bg": "rgba(101,126,183,100)"}}>
  <Center sx={{"alignItems": "center", "height": "100%"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#CFCBDA"}}}>
  {`Pandas`}
</Text>
</Center>
</Box>
  <Box sx={{"border-radius": "25px", "-webkit-border-radius": "36px 36px 36px 36px", "-moz-border-radius": "36px 36px 36px 36px", "box-shadow": "17px 16px 20px rgba(0, 0, 0, 0.4)", "border": "3px solid rgba(22, 99, 130, 0.3)", "justifyContent": "center", "alignItems": "center", "height": "2em", "width": "12em", "bg": "rgba(101,126,183,100)"}}>
  <Center sx={{"alignItems": "center", "height": "100%"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#CFCBDA"}}}>
  {`Numpy`}
</Text>
</Center>
</Box>
</SimpleGrid>
</Box>
  <Box sx={{"display": ["block", "none", "none", "none"]}}>
  <SimpleGrid columns={[1]} spacing={`1rem`}>
  <Box sx={{"border-radius": "25px", "-webkit-border-radius": "36px 36px 36px 36px", "-moz-border-radius": "36px 36px 36px 36px", "box-shadow": "17px 16px 20px rgba(0, 0, 0, 0.4)", "border": "3px solid rgba(22, 99, 130, 0.3)", "justifyContent": "center", "alignItems": "center", "height": "2em", "width": "12em", "bg": "rgba(101,126,183,100)"}}>
  <Center sx={{"alignItems": "center", "height": "100%"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#CFCBDA"}}}>
  {`Scikit-Learn`}
</Text>
</Center>
</Box>
  <Box sx={{"border-radius": "25px", "-webkit-border-radius": "36px 36px 36px 36px", "-moz-border-radius": "36px 36px 36px 36px", "box-shadow": "17px 16px 20px rgba(0, 0, 0, 0.4)", "border": "3px solid rgba(22, 99, 130, 0.3)", "justifyContent": "center", "alignItems": "center", "height": "2em", "width": "12em", "bg": "rgba(101,126,183,100)"}}>
  <Center sx={{"alignItems": "center", "height": "100%"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#CFCBDA"}}}>
  {`Pandas`}
</Text>
</Center>
</Box>
  <Box sx={{"border-radius": "25px", "-webkit-border-radius": "36px 36px 36px 36px", "-moz-border-radius": "36px 36px 36px 36px", "box-shadow": "17px 16px 20px rgba(0, 0, 0, 0.4)", "border": "3px solid rgba(22, 99, 130, 0.3)", "justifyContent": "center", "alignItems": "center", "height": "2em", "width": "12em", "bg": "rgba(101,126,183,100)"}}>
  <Center sx={{"alignItems": "center", "height": "100%"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#CFCBDA"}}}>
  {`Numpy`}
</Text>
</Center>
</Box>
</SimpleGrid>
</Box>
  <VStack sx={{"fontSize": ["0.5em", "0.6em", "0.7em", "0.8em", "0.9em", "1em", "1.1em", "1.2em"], "padding": "10"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#9e9e9e"}, "alignItems": "center", "justifyContent": "center", "marginBottom": "40px"}}>
  {`A house price predictor model based on the prices of the real state market of California.`}
</Text>
</VStack>
  <HStack>
  <Link as={NextLink} href={`https://databasequery.streamlit.app/`} isExternal={true} sx={{"_light": {"background": "linear-gradient(to top left, #62B4FC 0%, #231421 66%)", "-webkit-background-clip": "text", "-webkit-text-fill-color": "transparent"}, "_dark": {"background": "linear-gradient(to top, #CFCFCF 0%, #698DA6 100%)", "-webkit-background-clip": "text", "-webkit-text-fill-color": "transparent"}, "marginBottom": "50px", "fontSize": ["2em", "2.5em", "3em", "3.5em"]}}>
  {`Data Base Query`}
</Link>
</HStack>
  <VStack sx={{"marginRight": "800px"}}>
  <ChakraImage htmlHeight={`500px`} htmlWidth={`500px`} src={`databasequery.png`} sx={{"borderRadius": "20px", "border": "5px solid #4D7387", "marginBottom": "30px", "alignItems": "center", "justifyContent": "center"}}/>
</VStack>
  <Box sx={{"display": ["none", "none", "none", "block"]}}>
  <SimpleGrid columns={[3]} spacing={`1rem`}>
  <Box sx={{"border-radius": "25px", "-webkit-border-radius": "36px 36px 36px 36px", "-moz-border-radius": "36px 36px 36px 36px", "box-shadow": "17px 16px 20px rgba(0, 0, 0, 0.4)", "border": "3px solid rgba(22, 99, 130, 0.3)", "justifyContent": "center", "alignItems": "center", "height": "2em", "width": "12em", "bg": "rgba(101,126,183,100)"}}>
  <Center sx={{"alignItems": "center", "height": "100%"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#CFCBDA"}}}>
  {`LangChain`}
</Text>
</Center>
</Box>
  <Box sx={{"border-radius": "25px", "-webkit-border-radius": "36px 36px 36px 36px", "-moz-border-radius": "36px 36px 36px 36px", "box-shadow": "17px 16px 20px rgba(0, 0, 0, 0.4)", "border": "3px solid rgba(22, 99, 130, 0.3)", "justifyContent": "center", "alignItems": "center", "height": "2em", "width": "12em", "bg": "rgba(101,126,183,100)"}}>
  <Center sx={{"alignItems": "center", "height": "100%"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#CFCBDA"}}}>
  {`Pandas`}
</Text>
</Center>
</Box>
  <Box sx={{"border-radius": "25px", "-webkit-border-radius": "36px 36px 36px 36px", "-moz-border-radius": "36px 36px 36px 36px", "box-shadow": "17px 16px 20px rgba(0, 0, 0, 0.4)", "border": "3px solid rgba(22, 99, 130, 0.3)", "justifyContent": "center", "alignItems": "center", "height": "2em", "width": "12em", "bg": "rgba(101,126,183,100)"}}>
  <Center sx={{"alignItems": "center", "height": "100%"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#CFCBDA"}}}>
  {`SQL`}
</Text>
</Center>
</Box>
</SimpleGrid>
</Box>
  <Box sx={{"display": ["block", "none", "none", "none"]}}>
  <SimpleGrid columns={[1]} spacing={`1rem`}>
  <Box sx={{"border-radius": "25px", "-webkit-border-radius": "36px 36px 36px 36px", "-moz-border-radius": "36px 36px 36px 36px", "box-shadow": "17px 16px 20px rgba(0, 0, 0, 0.4)", "border": "3px solid rgba(22, 99, 130, 0.3)", "justifyContent": "center", "alignItems": "center", "height": "2em", "width": "12em", "bg": "rgba(101,126,183,100)"}}>
  <Center sx={{"alignItems": "center", "height": "100%"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#CFCBDA"}}}>
  {`LangChain`}
</Text>
</Center>
</Box>
  <Box sx={{"border-radius": "25px", "-webkit-border-radius": "36px 36px 36px 36px", "-moz-border-radius": "36px 36px 36px 36px", "box-shadow": "17px 16px 20px rgba(0, 0, 0, 0.4)", "border": "3px solid rgba(22, 99, 130, 0.3)", "justifyContent": "center", "alignItems": "center", "height": "2em", "width": "12em", "bg": "rgba(101,126,183,100)"}}>
  <Center sx={{"alignItems": "center", "height": "100%"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#CFCBDA"}}}>
  {`Pandas`}
</Text>
</Center>
</Box>
  <Box sx={{"border-radius": "25px", "-webkit-border-radius": "36px 36px 36px 36px", "-moz-border-radius": "36px 36px 36px 36px", "box-shadow": "17px 16px 20px rgba(0, 0, 0, 0.4)", "border": "3px solid rgba(22, 99, 130, 0.3)", "justifyContent": "center", "alignItems": "center", "height": "2em", "width": "12em", "bg": "rgba(101,126,183,100)"}}>
  <Center sx={{"alignItems": "center", "height": "100%"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#CFCBDA"}}}>
  {`SQL`}
</Text>
</Center>
</Box>
</SimpleGrid>
</Box>
  <VStack sx={{"fontSize": ["0.5em", "0.6em", "0.7em", "0.8em", "0.9em", "1em", "1.1em", "1.2em"]}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#9e9e9e"}, "alignItems": "center", "justifyContent": "center", "padding": "10"}}>
  {`A NL2SQL model to query a data base through the OpenAI API.`}
</Text>
</VStack>
  <HStack>
  <Link as={NextLink} href={`https://financeweb.streamlit.app/`} isExternal={true} sx={{"_light": {"background": "linear-gradient(to top left, #62B4FC 0%, #231421 66%)", "-webkit-background-clip": "text", "-webkit-text-fill-color": "transparent"}, "_dark": {"background": "linear-gradient(to top, #CFCFCF 0%, #698DA6 100%)", "-webkit-background-clip": "text", "-webkit-text-fill-color": "transparent"}, "marginBottom": "50px", "fontSize": ["2em", "2.5em", "3em", "3.5em"]}}>
  {`Finance Web`}
</Link>
</HStack>
  <VStack sx={{"marginRight": "800px"}}>
  <ChakraImage htmlHeight={`500px`} htmlWidth={`500px`} src={`finance_market.jpg`} sx={{"borderRadius": "20px", "border": "5px solid #4D7387", "marginBottom": "30px", "alignItems": "center", "justifyContent": "center"}}/>
</VStack>
  <Box sx={{"display": ["none", "none", "none", "block"]}}>
  <SimpleGrid columns={[3]} spacing={`1rem`}>
  <Box sx={{"border-radius": "25px", "-webkit-border-radius": "36px 36px 36px 36px", "-moz-border-radius": "36px 36px 36px 36px", "box-shadow": "17px 16px 20px rgba(0, 0, 0, 0.4)", "border": "3px solid rgba(22, 99, 130, 0.3)", "justifyContent": "center", "alignItems": "center", "height": "2em", "width": "12em", "bg": "rgba(101,126,183,100)"}}>
  <Center sx={{"alignItems": "center", "height": "100%"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#CFCBDA"}}}>
  {`TextBlob`}
</Text>
</Center>
</Box>
  <Box sx={{"border-radius": "25px", "-webkit-border-radius": "36px 36px 36px 36px", "-moz-border-radius": "36px 36px 36px 36px", "box-shadow": "17px 16px 20px rgba(0, 0, 0, 0.4)", "border": "3px solid rgba(22, 99, 130, 0.3)", "justifyContent": "center", "alignItems": "center", "height": "2em", "width": "12em", "bg": "rgba(101,126,183,100)"}}>
  <Center sx={{"alignItems": "center", "height": "100%"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#CFCBDA"}}}>
  {`Pandas`}
</Text>
</Center>
</Box>
  <Box sx={{"border-radius": "25px", "-webkit-border-radius": "36px 36px 36px 36px", "-moz-border-radius": "36px 36px 36px 36px", "box-shadow": "17px 16px 20px rgba(0, 0, 0, 0.4)", "border": "3px solid rgba(22, 99, 130, 0.3)", "justifyContent": "center", "alignItems": "center", "height": "2em", "width": "12em", "bg": "rgba(101,126,183,100)"}}>
  <Center sx={{"alignItems": "center", "height": "100%"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#CFCBDA"}}}>
  {`Requests`}
</Text>
</Center>
</Box>
</SimpleGrid>
</Box>
  <Box sx={{"display": ["block", "none", "none", "none"]}}>
  <SimpleGrid columns={[1]} spacing={`1rem`}>
  <Box sx={{"border-radius": "25px", "-webkit-border-radius": "36px 36px 36px 36px", "-moz-border-radius": "36px 36px 36px 36px", "box-shadow": "17px 16px 20px rgba(0, 0, 0, 0.4)", "border": "3px solid rgba(22, 99, 130, 0.3)", "justifyContent": "center", "alignItems": "center", "height": "2em", "width": "12em", "bg": "rgba(101,126,183,100)"}}>
  <Center sx={{"alignItems": "center", "height": "100%"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#CFCBDA"}}}>
  {`TextBlob`}
</Text>
</Center>
</Box>
  <Box sx={{"border-radius": "25px", "-webkit-border-radius": "36px 36px 36px 36px", "-moz-border-radius": "36px 36px 36px 36px", "box-shadow": "17px 16px 20px rgba(0, 0, 0, 0.4)", "border": "3px solid rgba(22, 99, 130, 0.3)", "justifyContent": "center", "alignItems": "center", "height": "2em", "width": "12em", "bg": "rgba(101,126,183,100)"}}>
  <Center sx={{"alignItems": "center", "height": "100%"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#CFCBDA"}}}>
  {`Pandas`}
</Text>
</Center>
</Box>
  <Box sx={{"border-radius": "25px", "-webkit-border-radius": "36px 36px 36px 36px", "-moz-border-radius": "36px 36px 36px 36px", "box-shadow": "17px 16px 20px rgba(0, 0, 0, 0.4)", "border": "3px solid rgba(22, 99, 130, 0.3)", "justifyContent": "center", "alignItems": "center", "height": "2em", "width": "12em", "bg": "rgba(101,126,183,100)"}}>
  <Center sx={{"alignItems": "center", "height": "100%"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#CFCBDA"}}}>
  {`Requests`}
</Text>
</Center>
</Box>
</SimpleGrid>
</Box>
  <VStack sx={{"fontSize": ["0.5em", "0.6em", "0.7em", "0.8em", "0.9em", "1em", "1.1em", "1.2em"]}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#9e9e9e"}, "alignItems": "center", "justifyContent": "center", "padding": "10"}}>
  {`A Finance web using YFinance library`}
</Text>
</VStack>
  <HStack>
  <Link as={NextLink} href={`https://blog-creator.streamlit.app/`} isExternal={true} sx={{"_light": {"background": "linear-gradient(to top left, #62B4FC 0%, #231421 66%)", "-webkit-background-clip": "text", "-webkit-text-fill-color": "transparent"}, "_dark": {"background": "linear-gradient(to top, #CFCFCF 0%, #698DA6 100%)", "-webkit-background-clip": "text", "-webkit-text-fill-color": "transparent"}, "marginBottom": "50px", "fontSize": ["2em", "2.5em", "3em", "3.5em"]}}>
  {`Blog Creator`}
</Link>
</HStack>
  <VStack sx={{"marginRight": "800px"}}>
  <ChakraImage htmlHeight={`500px`} htmlWidth={`500px`} src={`blog_creator.png`} sx={{"borderRadius": "20px", "border": "5px solid #4D7387", "marginBottom": "30px", "alignItems": "center", "justifyContent": "center"}}/>
</VStack>
  <Box sx={{"display": ["none", "none", "none", "block"]}}>
  <SimpleGrid columns={[3]} spacing={`1rem`}>
  <Box sx={{"border-radius": "25px", "-webkit-border-radius": "36px 36px 36px 36px", "-moz-border-radius": "36px 36px 36px 36px", "box-shadow": "17px 16px 20px rgba(0, 0, 0, 0.4)", "border": "3px solid rgba(22, 99, 130, 0.3)", "justifyContent": "center", "alignItems": "center", "height": "2em", "width": "12em", "bg": "rgba(101,126,183,100)"}}>
  <Center sx={{"alignItems": "center", "height": "100%"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#CFCBDA"}}}>
  {`LangChain`}
</Text>
</Center>
</Box>
  <Box sx={{"border-radius": "25px", "-webkit-border-radius": "36px 36px 36px 36px", "-moz-border-radius": "36px 36px 36px 36px", "box-shadow": "17px 16px 20px rgba(0, 0, 0, 0.4)", "border": "3px solid rgba(22, 99, 130, 0.3)", "justifyContent": "center", "alignItems": "center", "height": "2em", "width": "12em", "bg": "rgba(101,126,183,100)"}}>
  <Center sx={{"alignItems": "center", "height": "100%"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#CFCBDA"}}}>
  {`OpenAI API`}
</Text>
</Center>
</Box>
  <Box sx={{"border-radius": "25px", "-webkit-border-radius": "36px 36px 36px 36px", "-moz-border-radius": "36px 36px 36px 36px", "box-shadow": "17px 16px 20px rgba(0, 0, 0, 0.4)", "border": "3px solid rgba(22, 99, 130, 0.3)", "justifyContent": "center", "alignItems": "center", "height": "2em", "width": "12em", "bg": "rgba(101,126,183,100)"}}>
  <Center sx={{"alignItems": "center", "height": "100%"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#CFCBDA"}}}>
  {`TextBlob`}
</Text>
</Center>
</Box>
</SimpleGrid>
</Box>
  <Box sx={{"display": ["block", "none", "none", "none"]}}>
  <SimpleGrid columns={[1]} spacing={`1rem`}>
  <Box sx={{"border-radius": "25px", "-webkit-border-radius": "36px 36px 36px 36px", "-moz-border-radius": "36px 36px 36px 36px", "box-shadow": "17px 16px 20px rgba(0, 0, 0, 0.4)", "border": "3px solid rgba(22, 99, 130, 0.3)", "justifyContent": "center", "alignItems": "center", "height": "2em", "width": "12em", "bg": "rgba(101,126,183,100)"}}>
  <Center sx={{"alignItems": "center", "height": "100%"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#CFCBDA"}}}>
  {`LangChain`}
</Text>
</Center>
</Box>
  <Box sx={{"border-radius": "25px", "-webkit-border-radius": "36px 36px 36px 36px", "-moz-border-radius": "36px 36px 36px 36px", "box-shadow": "17px 16px 20px rgba(0, 0, 0, 0.4)", "border": "3px solid rgba(22, 99, 130, 0.3)", "justifyContent": "center", "alignItems": "center", "height": "2em", "width": "12em", "bg": "rgba(101,126,183,100)"}}>
  <Center sx={{"alignItems": "center", "height": "100%"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#CFCBDA"}}}>
  {`OPenAI API`}
</Text>
</Center>
</Box>
  <Box sx={{"border-radius": "25px", "-webkit-border-radius": "36px 36px 36px 36px", "-moz-border-radius": "36px 36px 36px 36px", "box-shadow": "17px 16px 20px rgba(0, 0, 0, 0.4)", "border": "3px solid rgba(22, 99, 130, 0.3)", "justifyContent": "center", "alignItems": "center", "height": "2em", "width": "12em", "bg": "rgba(101,126,183,100)"}}>
  <Center sx={{"alignItems": "center", "height": "100%"}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#CFCBDA"}}}>
  {`TextBlob`}
</Text>
</Center>
</Box>
</SimpleGrid>
</Box>
  <VStack sx={{"fontSize": ["0.5em", "0.6em", "0.7em", "0.8em", "0.9em", "1em", "1.1em", "1.2em"]}}>
  <Text sx={{"_light": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#4e4646"}, "_dark": {"fontStyle": "oblique", "fontWeight": "normal", "fontFamily": "fantasy", "fontSize": "1.5em", "color": "#9e9e9e"}, "alignItems": "center", "justifyContent": "center", "padding": "10"}}>
  {`A blog creator using langchain`}
</Text>
</VStack>
</VStack>
</VStack>
</Box>
</Box>
  <HStack sx={{"widht": ["100%", "90%", "60%", "45%", "45%"], "height": "50px", "aligntItems": "center", "justifyContent": "center"}}>
  <Text sx={{"fontSize": "10px", "fontWeight": "semibold"}}>
  {`Copyright 2024 Juan Gonzalez`}
</Text>
</HStack>
</VStack>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`/cover.png`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
