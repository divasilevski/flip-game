import { useCallback, useEffect, useState } from "react";
import { Record } from "types/record.types";
import { keys } from "config/keys";

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
    const index = oldRecords.findIndex((el) => el.title === newRecord.title);

    if (index < 0) {
      oldRecords.push(newRecord);
    } else if (oldRecords[index].time > newRecord.time) {
      oldRecords[index] = newRecord;
    }

    localStorage.setItem(keys.RECORDS_STORAGE_KEY, JSON.stringify(oldRecords));
  }, []);

  useEffect(() => {
    if (!params?.onlyCreate) {
      setRecords(getRecordsFromStorage());
    }
  }, []);

  return { records, createRecord };
}
