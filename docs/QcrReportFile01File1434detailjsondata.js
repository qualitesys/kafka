console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html" 
 , "texte" : "File raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java 24 rule violations " 
 , "fic2"  : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "Iterator<Batch<T>>"
 , "c2" : "org.apache.kafka.raft.internals.RecordsIterator"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.raft.internals.RecordsIterator" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "RecordsIterator"
 , "c2" : "RecordsIterator(Records;RecordSerde<T>;BufferSupplier;int)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasNext()"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Batch<T>"
 , "c2" : "next()"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "ensureOpen()"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "MemoryRecords"
 , "c2" : "readFileRecords(FileRecords;ByteBuffer)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "MemoryRecords"
 , "c2" : "createMemoryRecords(FileRecords)"
 , "c3" : "5"
 , "c4" : "12"
}} 
,
{ "ligne" : {
   "c1" : "Iterator<MutableRecordBatch>"
 , "c2" : "nextBatches()"
 , "c3" : "6"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "Optional<Batch<T>>"
 , "c2" : "nextBatch()"
 , "c3" : "4"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "Batch<T>"
 , "c2" : "readBatch(DefaultRecordBatch)"
 , "c3" : "5"
 , "c4" : "11"
}} 
,
{ "ligne" : {
   "c1" : "T"
 , "c2" : "readRecord(Readable)"
 , "c3" : "5"
 , "c4" : "13"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.png" 

 , "ligneplantuml" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.svg" }

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
"data11" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "14"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00024"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#24"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00024] The class RecordsIterator contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.raft.internals.RecordsIterator.next@POLYN173195 the MagicNumber/String  'Batch iterator doesn't have any more elements' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.raft.internals.RecordsIterator.close@POLYN173603 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.raft.internals.RecordsIterator.ensureOpen@POLYN173857 the MagicNumber/String  'Serde record batch itererator was closed' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#86"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00086] For method readFileRecords arguments FileRecords  fileRecords|ByteBuffer  buffer"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#86"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00086] The argument fileRecords is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#86"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00086] The argument buffer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.raft.internals.RecordsIterator.readFileRecords@POLYN174031 the MagicNumber/String  'Failed to read records into memory' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#98"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00098] For method createMemoryRecords arguments FileRecords  fileRecords"
}} 
,
{ "ligne" : {
   "c1" : "00135"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method org.apache.kafka.raft.internals.RecordsIterator.nextBatches@POLYN175973 the MagicNumber/String  'Unexpected Records type %s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00157"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method org.apache.kafka.raft.internals.RecordsIterator.nextBatch@POLYN176894 the MagicNumber/String  'DefaultRecordBatch expected by record type was %s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00167"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#167"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00167] For method readBatch arguments DefaultRecordBatch  batch"
}} 
,
{ "ligne" : {
   "c1" : "00167"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#167"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00167] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00186] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00179"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00179] In method org.apache.kafka.raft.internals.RecordsIterator.readBatch@POLYN177888 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00180"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00180] In method org.apache.kafka.raft.internals.RecordsIterator.readBatch@POLYN177888 the MagicNumber/String  'Expected a record count for the records batch' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00185"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00185] In method org.apache.kafka.raft.internals.RecordsIterator.readBatch@POLYN177888 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00203"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#203"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00203] For method readRecord arguments Readable  input"
}} 
,
{ "ligne" : {
   "c1" : "00203"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#203"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00203] The argument input is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00211"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#211"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00211] In method org.apache.kafka.raft.internals.RecordsIterator.readRecord@POLYN179507 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00219"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#219"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00219] In method org.apache.kafka.raft.internals.RecordsIterator.readRecord@POLYN179507 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00220"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#220"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00220] In method org.apache.kafka.raft.internals.RecordsIterator.readRecord@POLYN179507 the MagicNumber/String  'Unexpected key size ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00224"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#224"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00224] In method org.apache.kafka.raft.internals.RecordsIterator.readRecord@POLYN179507 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00232"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsIterator.java.html#232"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00232] In method org.apache.kafka.raft.internals.RecordsIterator.readRecord@POLYN179507 the MagicNumber/String  0 should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
