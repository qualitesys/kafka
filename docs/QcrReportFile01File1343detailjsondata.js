console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsDelta.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/image/ProducerIdsDelta.java 7 rule violations " 
 , "fic2"  : "./qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsDelta.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.image.ProducerIdsDelta"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.image.ProducerIdsDelta" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00027"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsDelta.java.html#27"
 , "c1" : "ProducerIdsDelta"
 , "c2" : "ProducerIdsDelta(ProducerIdsImage)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00031"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsDelta.java.html#31"
 , "c1" : "void"
 , "c2" : "setNextProducerId(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00035"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsDelta.java.html#35"
 , "c1" : "long"
 , "c2" : "nextProducerId()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00039"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsDelta.java.html#39"
 , "c1" : "void"
 , "c2" : "finishSnapshot()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00043"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsDelta.java.html#43"
 , "c1" : "void"
 , "c2" : "handleMetadataVersionChange(MetadataVersion)"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00047"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsDelta.java.html#47"
 , "c1" : "void"
 , "c2" : "replay(ProducerIdsRecord)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00051"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsDelta.java.html#51"
 , "c1" : "ProducerIdsImage"
 , "c2" : "apply()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsDelta.java.png" 

 , "ligneplantuml" : "./qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsDelta.java.svg" }

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
"data11" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
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
 , "c1" : "00027"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsDelta.java.html#27"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00027] The argument image is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsDelta.java.html#31"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00031] For method setNextProducerId arguments long  highestSeenProducerId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsDelta.java.html#43"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00043] For method handleMetadataVersionChange arguments MetadataVersion  newVersion"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsDelta.java.html#47"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00047] For method replay arguments ProducerIdsRecord  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsDelta.java.html#47"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00047] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsDelta.java.html#39"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00039] Public method finishSnapshot is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsDelta.java.html#43"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00043] Public method handleMetadataVersionChange is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsDelta.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
