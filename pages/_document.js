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

                    <link href="https://fonts.gstatic.com" rel="preconnect"/>
                    <link
                        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i&display=optional"
                        rel="stylesheet"/>



                    <script
                        dangerouslySetInnerHTML={{
                            __html: `</script><link rel='preload' href='https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css' as='style' onload="this.onload=null;this.rel='stylesheet'"/><script>`,
                        }}
                    /> <script
                        dangerouslySetInnerHTML={{
                            __html: `</script><link rel='preload' href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' as='style' onload="this.onload=null;this.rel='stylesheet'"/><script>`,
                        }}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `</script><link rel='preload' href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css' as='style' onload="this.onload=null;this.rel='stylesheet'"/><script>`,
                        }}
                    />

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
