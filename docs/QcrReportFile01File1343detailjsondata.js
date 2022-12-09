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
 , "c5" : "00012"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsDelta.java.html#12"
 , "c1" : "ProducerIdsDelta"
 , "c2" : "ProducerIdsDelta(ProducerIdsImage)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00016"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsDelta.java.html#16"
 , "c1" : "void"
 , "c2" : "setNextProducerId(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00020"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsDelta.java.html#20"
 , "c1" : "long"
 , "c2" : "nextProducerId()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00024"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsDelta.java.html#24"
 , "c1" : "void"
 , "c2" : "finishSnapshot()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00028"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsDelta.java.html#28"
 , "c1" : "void"
 , "c2" : "handleMetadataVersionChange(MetadataVersion)"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00032"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsDelta.java.html#32"
 , "c1" : "void"
 , "c2" : "replay(ProducerIdsRecord)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00036"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsDelta.java.html#36"
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
 , "c1" : "00012"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsDelta.java.html#12"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00012] The argument image is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00016"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsDelta.java.html#16"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00016] For method setNextProducerId arguments long  highestSeenProducerId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00028"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsDelta.java.html#28"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00028] For method handleMetadataVersionChange arguments MetadataVersion  newVersion"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsDelta.java.html#32"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00032] For method replay arguments ProducerIdsRecord  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsDelta.java.html#32"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00032] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00024"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsDelta.java.html#24"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00024] Public method finishSnapshot is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00028"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsDelta.java.html#28"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00028] Public method handleMetadataVersionChange is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsDelta.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
