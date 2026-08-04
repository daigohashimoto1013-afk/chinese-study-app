package com.example.chinese_study_api;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class WorkController {

    private final WorkRepository repository;

    public WorkController(WorkRepository repository) {
        this.repository = repository;
    }

    // 一覧取得
    @GetMapping("/works")
    public List<Work> getWorks() {
        return repository.findAll();
    }

    // 登録
    @PostMapping("/works")
    public Work addWork(@RequestBody Work work) {
        return repository.save(work);
    }

    // 削除
    @DeleteMapping("/works/{id}")
    public String deleteWork(@PathVariable int id) {

        if (repository.existsById(id)) {
            repository.deleteById(id);
            return "削除しました";
        }

        return "指定された作品が見つかりません";
    }

    // 修正
    @PutMapping("/works/{id}")
    public Work updateWork(@PathVariable int id, @RequestBody Work updatedWork) {

        Work work = repository.findById(id).orElse(null);

        if (work == null) {
            return null;
        }

        work.setTitle(updatedWork.getTitle());
        work.setAuthor(updatedWork.getAuthor());
        work.setChineseText(updatedWork.getChineseText());
        work.setPinyin(updatedWork.getPinyin());
        work.setJapanese(updatedWork.getJapanese());
        work.setMemo(updatedWork.getMemo());

        return repository.save(work);
    }
}