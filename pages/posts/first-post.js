/*
 * @Author: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @Date: 2023-03-21 17:03:44
 * @LastEditors: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @LastEditTime: 2023-03-22 09:15:25
 * @FilePath: \nextjs-blog\pages\first-post.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import  Head  from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
export default function FirstPost() {
    return(<Layout>
        <Head>
            <title>post page</title>
        </Head>
        <h1>First Post</h1>
        <h2>
            <Link href="/">Back to Home</Link>
        </h2>
    </Layout>) 
}