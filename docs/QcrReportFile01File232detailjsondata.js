console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/UniformStickyPartitioner.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/producer/UniformStickyPartitioner.java 8 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/UniformStickyPartitioner.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "Partitioner"
 , "c2" : "org.apache.kafka.clients.producer.UniformStickyPartitioner"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.producer.UniformStickyPartitioner" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00016"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/UniformStickyPartitioner.java.html#16"
 , "c1" : "void"
 , "c2" : "configure(Map<String,?>)"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00019"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/UniformStickyPartitioner.java.html#19"
 , "c1" : "int"
 , "c2" : "partition(String;Object;byte[];Object;byte[];Cluster)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00023"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/UniformStickyPartitioner.java.html#23"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00027"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/UniformStickyPartitioner.java.html#27"
 , "c1" : "void"
 , "c2" : "onNewBatch(String;Cluster;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/UniformStickyPartitioner.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/UniformStickyPartitioner.java.svg" }

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
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000005"
 , "c3" : "Empty method"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00012"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/UniformStickyPartitioner.java.html#12"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00012] The class UniformStickyPartitioner contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00016"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/UniformStickyPartitioner.java.html#16"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00016] For method configure arguments Map&lt;String ,? &gt;  configs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00019"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/UniformStickyPartitioner.java.html#19"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00019] For method partition arguments String  topic|Object  key|byte[]  keyBytes|Object  value|byte[]  valueBytes|Cluster  cluster"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00027"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/UniformStickyPartitioner.java.html#27"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00027] For method onNewBatch arguments String  topic|Cluster  cluster|int  prevPartition"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00016"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/UniformStickyPartitioner.java.html#16"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00016] Void method configure is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00016"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/UniformStickyPartitioner.java.html#16"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00016] Void method configure is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/UniformStickyPartitioner.java.html#23"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00023] Void method close is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/UniformStickyPartitioner.java.html#23"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00023] Void method close is empty or contains only a return. Interface segregation"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/UniformStickyPartitioner.java.svg" }

};
console.log('leListeStr 99 main end');
