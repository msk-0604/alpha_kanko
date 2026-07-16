"use client";

import { useMemo, useState } from "react";
import type { WorkCategory, WorkItem } from "@/data/works";
import { workCategories } from "@/data/works";
import { WorksCardGrid } from "./WorksCardGrid";
import styles from "./works.module.css";

type WorksFilterProps = {
  items: WorkItem[];
};

export function WorksFilter({ items }: WorksFilterProps) {
  const [category, setCategory] = useState<WorkCategory | "all">("all");

  const filtered = useMemo(() => {
    if (category === "all") return items;
    return items.filter((item) => item.category === category);
  }, [category, items]);

  const availableCategories = useMemo(
    () => workCategories.filter((cat) => items.some((item) => item.category === cat)),
    [items],
  );

  return (
    <div>
      <div className={styles.filterBar} role="group" aria-label="工事種別で絞り込み">
        <button
          type="button"
          className={category === "all" ? styles.filterActive : styles.filterBtn}
          onClick={() => setCategory("all")}
          aria-pressed={category === "all"}
        >
          すべて
        </button>
        {availableCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            className={category === cat ? styles.filterActive : styles.filterBtn}
            onClick={() => setCategory(cat)}
            aria-pressed={category === cat}
          >
            {cat}
          </button>
        ))}
      </div>
      <p className={styles.filterCount}>{filtered.length}件</p>
      {filtered.length > 0 ? (
        <WorksCardGrid items={filtered} showSectionHeader={false} />
      ) : (
        <p className={styles.filterEmpty}>該当する施工事例はまだありません。</p>
      )}
    </div>
  );
}
