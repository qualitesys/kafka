console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/record/CompressionRatioEstimator.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/record/CompressionRatioEstimator.java 14 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.common.record.CompressionRatioEstimator"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.record.CompressionRatioEstimator" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00042"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/CompressionRatioEstimator.java.html#42"
 , "c1" : "float"
 , "c2" : "updateEstimation(String;CompressionType;float)"
 , "c3" : "4"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00058"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/CompressionRatioEstimator.java.html#58"
 , "c1" : "float"
 , "c2" : "estimation(String;CompressionType)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00066"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/CompressionRatioEstimator.java.html#66"
 , "c1" : "void"
 , "c2" : "resetEstimation(String)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00078"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/CompressionRatioEstimator.java.html#78"
 , "c1" : "void"
 , "c2" : "removeEstimation(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00085"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/CompressionRatioEstimator.java.html#85"
 , "c1" : "void"
 , "c2" : "setEstimation(String;CompressionType;float)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00092"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/CompressionRatioEstimator.java.html#92"
 , "c1" : "float[]"
 , "c2" : "getAndCreateEstimationIfAbsent(String)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00104"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/CompressionRatioEstimator.java.html#104"
 , "c1" : "float[]"
 , "c2" : "initialCompressionRatio()"
 , "c3" : "2"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/record/CompressionRatioEstimator.java.svg" }

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
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/CompressionRatioEstimator.java.html#42"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00042] For method updateEstimation arguments String  topic|CompressionType  type|float  observedRatio"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/CompressionRatioEstimator.java.html#42"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00042] The argument type is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/CompressionRatioEstimator.java.html#45"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00045] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/CompressionRatioEstimator.java.html#58"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00058] For method estimation arguments String  topic|CompressionType  type"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/CompressionRatioEstimator.java.html#58"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00058] The argument type is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/CompressionRatioEstimator.java.html#66"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00066] For method resetEstimation arguments String  topic"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/CompressionRatioEstimator.java.html#68"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00068] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/CompressionRatioEstimator.java.html#78"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00078] For method removeEstimation arguments String  topic"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/CompressionRatioEstimator.java.html#85"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00085] For method setEstimation arguments String  topic|CompressionType  type|float  ratio"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/CompressionRatioEstimator.java.html#85"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00085] The argument type is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/CompressionRatioEstimator.java.html#87"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00087] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/CompressionRatioEstimator.java.html#92"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00092] For method getAndCreateEstimationIfAbsent arguments String  topic"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/CompressionRatioEstimator.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.common.record.CompressionRatioEstimator.getAndCreateEstimationIfAbsent@POLYN159443 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/CompressionRatioEstimator.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.common.record.CompressionRatioEstimator.getAndCreateEstimationIfAbsent@POLYN159443 the MagicNumber/String  null should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/record/CompressionRatioEstimator.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
