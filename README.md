# 中国語学習管理アプリ

## 概要

中国語講義や文学作品の学習内容を、作品ごとに保存・復習できるWebアプリです。

作品名・作者・中国語本文・ピンイン・日本語訳・メモを登録し、復習時に一覧表示、検索、編集、削除ができます。

## 作成背景

授業ごとのプリントや翻訳メモが散らばり、試験前に復習しづらい課題があったため、自分の学習記録を一元管理できるツールとして作成しました。

また、Web制作で学んだHTML/CSS/JavaScriptに加えて、Java/Spring Bootを使ったバックエンド開発にも挑戦しました。

## 使用技術

### フロントエンド
- HTML
- CSS
- JavaScript

### バックエンド
- Java
- Spring Boot
- Maven

## 主な機能

- 作品情報の登録
- 作品一覧の表示
- 作品名・作者・本文・訳・メモによる検索
- 登録内容の編集
- 登録内容の削除
- フロントエンドとバックエンドAPIの連携

## フォルダ構成

```text
chinese-study-app
├─ frontend
│  ├─ index.html
│  ├─ style.css
│  └─ script.js
│
├─ backend
│  ├─ src
│  ├─ .mvn
│  ├─ pom.xml
│  ├─ mvnw
│  └─ mvnw.cmd
│
└─ README.md
