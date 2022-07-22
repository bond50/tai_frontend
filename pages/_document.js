import React from 'react'
import Document, {Head, Html, Main, NextScript} from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>

                    <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png"/>
                    <link rel="manifest" href="/icons/site.webmanifest"/>

                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&family=Poppins:ital,wght@0,500;1,500&family=Roboto:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
                        rel="stylesheet "/>

                    <link href="/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet preload"
                          as="style"/>
                    <link href="/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet preload"
                          as="style"/>
                    <link href="/vendor/boxicons/css/boxicons.min.css" rel="stylesheet preload" as="style"/>

                    {/*<script*/}
                    {/*    dangerouslySetInnerHTML={{*/}
                    {/*        __html: `</script><link rel='preload' href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' as='style' onload="this.onload=null;this.rel='stylesheet'"/><script>`,*/}
                    {/*    }}*/}
                    {/*/>*/}


                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
