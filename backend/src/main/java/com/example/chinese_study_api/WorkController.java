package com.example.chinese_study_api;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class WorkController {

    private List<Work> works = new ArrayList<>();
    private int nextId = 1;

    @GetMapping("/works")
    public List<Work> getWorks() {
        return works;
    }

    @PostMapping("/works")
    public Work addWork(@RequestBody Work work) {
        work.setId(nextId);
        nextId++;

        works.add(work);

        return work;
    }

    @DeleteMapping("/works/{id}")
    public String deleteWork(@PathVariable int id) {
        for (int i = 0; i < works.size(); i++) {
            if (works.get(i).getId() == id) {
                works.remove(i);
                return "削除しました";
            }
        }

        return "指定された作品が見つかりません";
    }

    @PutMapping("/works/{id}")
public Work updateWork(@PathVariable int id, @RequestBody Work updatedWork) {
    for (int i = 0; i < works.size(); i++) {
        if (works.get(i).getId() == id) {
            Work work = works.get(i);

            work.setTitle(updatedWork.getTitle());
            work.setAuthor(updatedWork.getAuthor());
            work.setChineseText(updatedWork.getChineseText());
            work.setPinyin(updatedWork.getPinyin());
            work.setJapanese(updatedWork.getJapanese());
            work.setMemo(updatedWork.getMemo());

            return work;
        }
    }

    return null;
}
}