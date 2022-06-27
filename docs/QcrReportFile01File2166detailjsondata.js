console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/rest/TaskRequest.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/rest/TaskRequest.java 3 rule violations " 
 , "fic2"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/rest/TaskRequest.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.trogdor.rest.TaskRequest"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.trogdor.rest.TaskRequest" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "TaskRequest"
 , "c2" : "TaskRequest(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "taskId()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/rest/TaskRequest.java.png" 

 , "ligneplantuml" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/rest/TaskRequest.java.svg" }

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
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00009"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/rest/TaskRequest.java.html#9"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00009] The class TaskRequest contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00014"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/rest/TaskRequest.java.html#14"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00014] In method org.apache.kafka.trogdor.rest.TaskRequest.TaskRequest@POLYN158331 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00014"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/rest/TaskRequest.java.html#14"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00014] In method org.apache.kafka.trogdor.rest.TaskRequest.TaskRequest@POLYN158331 the MagicNumber/String  '' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
