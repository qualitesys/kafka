console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordBatchIterator.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/record/RecordBatchIterator.java 2 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordBatchIterator.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AbstractIterator<T>"
 , "c2" : "org.apache.kafka.common.record.RecordBatchIterator"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.record.RecordBatchIterator" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00015"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/RecordBatchIterator.java.html#15"
 , "c1" : "RecordBatchIterator"
 , "c2" : "RecordBatchIterator(LogInputStream<T>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00020"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/RecordBatchIterator.java.html#20"
 , "c1" : "T"
 , "c2" : "makeNext()"
 , "c3" : "2"
 , "c4" : "5"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordBatchIterator.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordBatchIterator.java.svg" }

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
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordBatchIterator.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00023] In method org.apache.kafka.common.record.RecordBatchIterator.makeNext@POLYN144062 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00027"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordBatchIterator.java.html#27"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00027] In method org.apache.kafka.common.record.RecordBatchIterator.makeNext@POLYN144062 the MagicNumber/String  'Unexpected EOF while attempting to read the next batch' should be converted to const"
}} 
]
,
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordBatchIterator.java.fct.svg" 

}
};
console.log('leListeStr 99 main end');
