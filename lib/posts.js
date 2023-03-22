/*
 * @Author: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @Date: 2023-03-22 10:44:46
 * @LastEditors: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @LastEditTime: 2023-03-22 16:13:33
 * @FilePath: \nextjs-blog\lib\posts.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEfs
 */
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
    // 获取文件名
    const fileNames = fs.readdirSync(postsDirectory)
    console.log(fileNames)
    const allPostsData = fileNames.map((fileName) => {
        const id= fileName.replace(/\.md$/, '');

        // 读取Markdown文件
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // parse markdown 格式
        const matterResult = matter(fileContents)

        return {
            id, ...matterResult.data
        }
    })
    // 按日期排序
    return allPostsData.sort((a,b)=> {
        if (a.date < b.data) {
            return 1;
        } else{
            return -1;
        }
    })
}

/**
 * 获取博客id
 * @returns blogs id
 */
export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames.map((fileName) => {
        return {params: {
            id: fileName.replace(/\.md$/, '')
        }}
    })
}

/**
 * 根据id 获取博客内容
 * @param {String} id  blog id
 * @returns 
 */
export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
    const contentHtml = processedContent.toString()
    return {
        id,
        contentHtml,
        ...matterResult.data
    }
}