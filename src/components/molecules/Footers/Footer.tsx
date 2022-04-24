import React from 'react'
import FooterHead from '../../Atoms/FooterElements/FooterHead'
import FooterElement from '../../Atoms/FooterElements/FooterElement'
import { Box,Stack, Typography } from '@mui/material'
import { Container } from '@mui/material'
import Icons from '../../Atoms/BlinkIcon/Icons'

const Footer=()=> {
  return (
    <Box data-testid="Footers-element" sx={{height: "370px",width: "100%",bgcolor: "#F1F6F4",marginTop: "100px"}}>
        <Container maxWidth="md">
         <br/>
            <Stack direction="row" spacing={5}>
                <Stack spacing={3}>
                    <Icons height='26px' width='124px'/>
                    <Typography variant="subtitle1" color="#0365F2" fontWeight="500" fontSize="24px"
                    sx={{width: "378px", height: "64px"}}
                    > 
                        Big ideas in small packages
                        Start learnign now
                    </Typography>
                </Stack>
                <Stack spacing={3}>
                    <FooterHead content="Editorial" />
                    <FooterElement content="Book lists" />
                    <FooterElement content="What is Nonfiction?" />
                    <FooterElement content="What to read next?" />
                    <FooterElement content="Benefits of reading" />
                </Stack>
                <Stack spacing={3}>
                    <FooterHead content="Useful links" />
                    <FooterElement content="Pricing" />
                    <FooterElement content="Blinkist business" />
                    <FooterElement content="Gift cards" />
                    <FooterElement content="Blinkist magaine" />
                    <FooterElement content="Contact & help" />
                </Stack>
                <Stack spacing={3}>
                    <FooterHead content="Company" />
                    <FooterElement content="About" />
                    <FooterElement content="Careers" />
                    <FooterElement content="partners" />
                    <FooterElement content="Code of Conduct" />
                </Stack>
            </Stack>
            <br/>
            <br/>
            <FooterElement content="© Blinkist 2021 Sitemap   |   Imprint   |   Terms of Service   |   Privacy Policies" />
        </Container>

    </Box>
  )
}

export default Footer