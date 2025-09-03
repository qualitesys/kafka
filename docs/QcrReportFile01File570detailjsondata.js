console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/record/MutableRecordBatch.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/record/MutableRecordBatch.java 1 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "RecordBatch"
 , "c2" : "org.apache.kafka.common.record.MutableRecordBatch"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.record.MutableRecordBatch" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00033"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/MutableRecordBatch.java.html#33"
 , "c1" : "void"
 , "c2" : "setLastOffset(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00046"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/MutableRecordBatch.java.html#46"
 , "c1" : "void"
 , "c2" : "setMaxTimestamp(TimestampType;long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00052"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/MutableRecordBatch.java.html#52"
 , "c1" : "void"
 , "c2" : "setPartitionLeaderEpoch(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00058"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/MutableRecordBatch.java.html#58"
 , "c1" : "void"
 , "c2" : "writeTo(ByteBufferOutputStream)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00067"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/MutableRecordBatch.java.html#67"
 , "c1" : "CloseableIterator&lt;Record&gt;"
 , "c2" : "skipKeyValueIterator(BufferSupplier)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/record/MutableRecordBatch.java.svg" }

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
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAVSOLIDI"
 , "c3" : "The class does not respect the SOLID principle Interface Segregation"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00027"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/MutableRecordBatch.java.html#27"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVSOLIDI[00027] The interface MutableRecordBatch does not respect the SOLID Interface Segregation principle. Must contain only one method declaration"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/record/MutableRecordBatch.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
