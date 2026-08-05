# 中国語学習管理アプリ

## 概要

中国語講義で扱う文学作品を、作品名・作者・本文・拼音・日本語訳・メモとともに管理できるWebアプリです。

授業中に扱った資料を一元管理し、試験前に効率よく復習できることを目的として開発しました。

---

## 開発背景

大学の中国語講義では、

- 中国語本文
- 拼音
- 日本語訳
- 授業メモ

が別々に管理されており、復習しづらいという課題がありました。

そこで、必要な情報を1つの画面で管理できるアプリを作成しました。

---

## 主な機能

- 作品登録
- 作品一覧表示
- 作品検索
- 作品編集
- 作品削除
- MySQLによるデータ永続保存

---

## 使用技術

### Frontend

- HTML
- CSS
- JavaScript

### Backend

- Java
- Spring Boot
- Spring Data JPA

### Database

- MySQL

### その他

- Git
- GitHub
- Maven

---

## システム構成

Frontend
↓
JavaScript (Fetch API)
↓
Spring Boot REST API
↓
Spring Data JPA
↓
MySQL

---

## 画面

### ホーム画面

<img width="1907" height="947" alt="スクリーンショット_5-8-2026_133426_127 0 0 1" src="https://github.com/user-attachments/assets/265e0153-5fe9-4152-8ab4-b34bab848438" />


---

### 作品登録画面

<img width="1896" height="933" alt="スクリーンショット_5-8-2026_133452_127 0 0 1" src="https://github.com/user-attachments/assets/5a7361f8-5603-4f30-a7a0-3c8d86932b3d" />


---

### 復習画面

<img width="1911" height="948" alt="スクリーンショット_5-8-2026_133517_127 0 0 1" src="https://github.com/user-attachments/assets/d5ef4c58-2867-4176-9f12-58b0117b8a69" />


---

## 工夫した点

- REST APIを利用してフロントエンドとバックエンドを分離
- Spring BootとMySQLを連携し、アプリを再起動してもデータが保持される構成を実装
- JavaScriptのFetch APIを利用した非同期通信
- CRUD（登録・取得・更新・削除）機能を実装
- 検索機能を追加し、作品名や作者で素早く検索可能

---

## 今後追加したい機能

- UI改善
- ユーザーログイン
- OpenAI APIを利用した自動翻訳・拼音生成
- 単語帳機能
- お気に入り登録
- スマホアプリ化
- Railwayへのデプロイ
