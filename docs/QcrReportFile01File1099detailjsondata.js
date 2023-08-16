console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerTransactionContext.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerTransactionContext.java 26 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "TransactionContext"
 , "c2" : "org.apache.kafka.connect.runtime.WorkerTransactionContext"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.runtime.WorkerTransactionContext" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00043"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerTransactionContext.java.html#43"
 , "c1" : "void"
 , "c2" : "commitTransaction()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00048"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerTransactionContext.java.html#48"
 , "c1" : "void"
 , "c2" : "commitTransaction(SourceRecord)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00054"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerTransactionContext.java.html#54"
 , "c1" : "void"
 , "c2" : "abortTransaction()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00059"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerTransactionContext.java.html#59"
 , "c1" : "void"
 , "c2" : "abortTransaction(SourceRecord)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00064"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerTransactionContext.java.html#64"
 , "c1" : "boolean"
 , "c2" : "shouldCommitBatch()"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00071"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerTransactionContext.java.html#71"
 , "c1" : "boolean"
 , "c2" : "shouldAbortBatch()"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00078"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerTransactionContext.java.html#78"
 , "c1" : "boolean"
 , "c2" : "shouldCommitOn(SourceRecord)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00088"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerTransactionContext.java.html#88"
 , "c1" : "boolean"
 , "c2" : "shouldAbortOn(SourceRecord)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00093"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerTransactionContext.java.html#93"
 , "c1" : "void"
 , "c2" : "checkBatchRequestsConsistency()"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00099"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerTransactionContext.java.html#99"
 , "c1" : "void"
 , "c2" : "checkRecordRequestConsistency(SourceRecord)"
 , "c3" : "2"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerTransactionContext.java.svg" }

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
"data12a" : [
{ "ligne" :  "R0:org.apache.kafka.connect.runtime.WorkerTransactionContext.this" }
,
{ "ligne" :  "R1:org.apache.kafka.connect.runtime.WorkerTransactionContext.commitTransaction@POLYN161511.record" }
,
{ "ligne" :  "R2:org.apache.kafka.connect.runtime.WorkerTransactionContext.abortTransaction@POLYN161875.record" }
]
,
"data12b" : [
]
,
"data12c" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "9"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "8"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerTransactionContext.java.html#43"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00043] Lock statement on synchronized method commitTransaction"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerTransactionContext.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.connect.runtime.WorkerTransactionContext.commitTransaction@POLYN161395 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerTransactionContext.java.html#48"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00048] Lock statement on synchronized method commitTransaction"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerTransactionContext.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00048] For method commitTransaction arguments SourceRecord  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerTransactionContext.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.connect.runtime.WorkerTransactionContext.commitTransaction@POLYN161511 the MagicNumber/String  'Source record used to define transaction boundaries may not be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerTransactionContext.java.html#54"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00054] Lock statement on synchronized method abortTransaction"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerTransactionContext.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.connect.runtime.WorkerTransactionContext.abortTransaction@POLYN161759 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerTransactionContext.java.html#59"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00059] Lock statement on synchronized method abortTransaction"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerTransactionContext.java.html#59"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00059] For method abortTransaction arguments SourceRecord  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerTransactionContext.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.connect.runtime.WorkerTransactionContext.abortTransaction@POLYN161875 the MagicNumber/String  'Source record used to define transaction boundaries may not be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerTransactionContext.java.html#64"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00064] Lock statement on synchronized method shouldCommitBatch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerTransactionContext.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.connect.runtime.WorkerTransactionContext.shouldCommitBatch@POLYN162117 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerTransactionContext.java.html#71"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00071] Lock statement on synchronized method shouldAbortBatch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerTransactionContext.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.connect.runtime.WorkerTransactionContext.shouldAbortBatch@POLYN162365 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerTransactionContext.java.html#78"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00078] Lock statement on synchronized method shouldCommitOn"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerTransactionContext.java.html#78"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00078] For method shouldCommitOn arguments SourceRecord  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerTransactionContext.java.html#88"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00088] Lock statement on synchronized method shouldAbortOn"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerTransactionContext.java.html#88"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00088] For method shouldAbortOn arguments SourceRecord  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerTransactionContext.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.connect.runtime.WorkerTransactionContext.checkBatchRequestsConsistency@POLYN163030 the MagicNumber/String  'Connector requested both commit and abort of same transaction' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerTransactionContext.java.html#99"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00099] For method checkRecordRequestConsistency arguments SourceRecord  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerTransactionContext.java.html#99"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00099] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerTransactionContext.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.connect.runtime.WorkerTransactionContext.checkRecordRequestConsistency@POLYN163218 the MagicNumber/String  'Connector will fail as it has requested both commit and abort of transaction for same record: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerTransactionContext.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.connect.runtime.WorkerTransactionContext.checkRecordRequestConsistency@POLYN163218 the MagicNumber/String  'Connector requested both commit and abort of same record against topic/partition %s/%s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerTransactionContext.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.WorkerTransactionContext.checkRecordRequestConsistency@POLYN163218"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerTransactionContext.java.html#101"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00101] In the recursive method org.apache.kafka.connect.runtime.WorkerTransactionContext.checkRecordRequestConsistency@POLYN163218 the MagicNumber/String 'Connector will fail as it has requested both commit and abort of transaction for same record: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerTransactionContext.java.html#103"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00103] In the recursive method org.apache.kafka.connect.runtime.WorkerTransactionContext.checkRecordRequestConsistency@POLYN163218 the MagicNumber/String 'Connector requested both commit and abort of same record against topic/partition %s/%s' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerTransactionContext.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
