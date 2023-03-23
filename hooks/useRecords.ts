import { useCallback, useEffect, useState } from "react";
import { Record } from "types/record.types";
import { keys } from "config/keys";
import { merge } from "utils/merge";

interface UseRecordsParams {
  onlyCreate?: boolean;
}

export function useRecords(params?: UseRecordsParams) {
  const [records, setRecords] = useState<Record[]>([]);

  const getRecordsFromStorage = (): Record[] => {
    const recordsFromStorage = localStorage.getItem(keys.RECORDS_STORAGE_KEY);
    return recordsFromStorage ? JSON.parse(recordsFromStorage) : [];
  };

  const createRecord = useCallback((newRecord: Record) => {
    const oldRecords = getRecordsFromStorage();
    const records = merge<Record>(oldRecords, newRecord, "title");
    localStorage.setItem(keys.RECORDS_STORAGE_KEY, JSON.stringify(records));
  }, []);

  useEffect(() => {
    if (!params?.onlyCreate) {
      setRecords(getRecordsFromStorage());
    }
  }, []);

  return { records, createRecord };
}
