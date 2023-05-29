console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html" 
 , "texte" : "File raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java 30 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "Iterator<Batch<T>>"
 , "c2" : "org.apache.kafka.raft.internals.RecordsIterator"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.raft.internals.RecordsIterator" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00053"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#53"
 , "c1" : "RecordsIterator"
 , "c2" : "RecordsIterator(Records;RecordSerde&lt;T&gt;;BufferSupplier;int)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00066"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#66"
 , "c1" : "boolean"
 , "c2" : "hasNext()"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00077"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#77"
 , "c1" : "Batch&lt;T&gt;"
 , "c2" : "next()"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00089"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#89"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00095"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#95"
 , "c1" : "void"
 , "c2" : "ensureOpen()"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00101"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#101"
 , "c1" : "MemoryRecords"
 , "c2" : "readFileRecords(FileRecords;ByteBuffer)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00113"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#113"
 , "c1" : "MemoryRecords"
 , "c2" : "createMemoryRecords(FileRecords)"
 , "c3" : "5"
 , "c4" : "12"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00140"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#140"
 , "c1" : "Iterator&lt;MutableRecordBatch&gt;"
 , "c2" : "nextBatches()"
 , "c3" : "6"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00159"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#159"
 , "c1" : "Optional&lt;Batch&lt;T&gt;&gt;"
 , "c2" : "nextBatch()"
 , "c3" : "4"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00182"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#182"
 , "c1" : "Batch&lt;T&gt;"
 , "c2" : "readBatch(DefaultRecordBatch)"
 , "c3" : "5"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00218"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#218"
 , "c1" : "T"
 , "c2" : "readRecord(Readable)"
 , "c3" : "5"
 , "c4" : "13"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.svg" }

] 
, 
"data04" : [
]
, 
"data05" : [
]
, 
"data06" : [
]
, 
"data07" : [
]
, 
"data08" : [
]
, 
"data09a" : [
]
,
"data09b" : [
]
, 
"data10" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "14"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "7"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#66"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00066] For method hasNext list of called methods Object monObjet|java.util.Optional nextBatchN182957"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#77"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00077] For method next list of called methods Object monObjet|V nextBatch_getN183337"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.raft.internals.RecordsIterator.next@POLYN183093 the MagicNumber/String  'Batch iterator doesn't have any more elements' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.raft.internals.RecordsIterator.close@POLYN183503 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.raft.internals.RecordsIterator.ensureOpen@POLYN183759 the MagicNumber/String  'Serde record batch itererator was closed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#101"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00101] For method readFileRecords arguments FileRecords  fileRecords|ByteBuffer  buffer"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#101"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00101] The argument fileRecords is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#101"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00101] The argument buffer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.raft.internals.RecordsIterator.readFileRecords@POLYN183933 the MagicNumber/String  'Failed to read records into memory' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#113"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00113] For method createMemoryRecords arguments FileRecords  fileRecords"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#113"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00113] For method createMemoryRecords list of called methods Object monObjet|V allocatedBuffer_getN184755|org.apache.kafka.common.record.MemoryRecords readFileRecordsN185173"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#140"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00140] For method nextBatches list of called methods Object monObjet|int records_sizeInBytesN185960|org.apache.kafka.common.record.MemoryRecords createMemoryRecordsN186398"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00150"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#150"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00150] In method org.apache.kafka.raft.internals.RecordsIterator.nextBatches@POLYN185883 the MagicNumber/String  'Unexpected Records type %s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00159"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#159"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00159] For method nextBatch list of called methods Object monObjet|java.util.Iterator nextBatchesN186960|org.apache.kafka.raft.Batch nextBatches_nextN187101"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00172"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00172] In method org.apache.kafka.raft.internals.RecordsIterator.nextBatch@POLYN186808 the MagicNumber/String  'DefaultRecordBatch expected by record type was %s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00182"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#182"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00182] For method readBatch arguments DefaultRecordBatch  batch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00182"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#182"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00182] For method readBatch list of called methods Object monObjet|java.lang.Integer batch_countOrNullN188329"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00182"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#182"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00182] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00201"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00201] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00194"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method org.apache.kafka.raft.internals.RecordsIterator.readBatch@POLYN187804 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00195"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00195] In method org.apache.kafka.raft.internals.RecordsIterator.readBatch@POLYN187804 the MagicNumber/String  'Expected a record count for the records batch' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00200"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#200"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00200] In method org.apache.kafka.raft.internals.RecordsIterator.readBatch@POLYN187804 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00218"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#218"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00218] For method readRecord arguments Readable  input"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00218"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#218"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00218] For method readRecord list of called methods Object monObjet|long input_readVarlongN189634|int input_readVarintN189891|int input_readVarintN190148|T serde_readN190353|int input_readVarintN190471"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00218"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#218"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00218] The argument input is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00226"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#226"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00226] In method org.apache.kafka.raft.internals.RecordsIterator.readRecord@POLYN189431 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00234"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#234"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00234] In method org.apache.kafka.raft.internals.RecordsIterator.readRecord@POLYN189431 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00235"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#235"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00235] In method org.apache.kafka.raft.internals.RecordsIterator.readRecord@POLYN189431 the MagicNumber/String  'Unexpected key size ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00239"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#239"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00239] In method org.apache.kafka.raft.internals.RecordsIterator.readRecord@POLYN189431 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00247"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#247"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00247] In method org.apache.kafka.raft.internals.RecordsIterator.readRecord@POLYN189431 the MagicNumber/String  0 should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
