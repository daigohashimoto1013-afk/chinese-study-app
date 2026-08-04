package com.example.chinese_study_api;

public class Work {
     private int id;
    private String title;
    private String author;
    private String chineseText;
    private String pinyin;
    private String japanese;
    private String memo;

    public Work() {
    }

    public Work(int id, String title, String author, String chineseText, String pinyin, String japanese, String memo) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.chineseText = chineseText;
        this.pinyin = pinyin;
        this.japanese = japanese;
        this.memo = memo;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }


    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }


    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }


    public String getChineseText() {
        return chineseText;
    }

    public void setChineseText(String chineseText) {
        this.chineseText = chineseText;
    }


    public String getPinyin() {
        return pinyin;
    }

    public void setPinyin(String pinyin) {
        this.pinyin = pinyin;
    }


    public String getJapanese() {
        return japanese;
    }

    public void setJapanese(String japanese) {
        this.japanese = japanese;
    }


    public String getMemo() {
        return memo;
    }

    public void setMemo(String memo) {
        this.memo = memo;
    }
}
