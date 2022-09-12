console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/image/ConfigurationDelta.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/image/ConfigurationDelta.java 10 rule violations " 
 , "fic2"  : "./qc/metadata/src/main/java/org/apache/kafka/image/ConfigurationDelta.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.image.ConfigurationDelta"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.image.ConfigurationDelta" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00018"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ConfigurationDelta.java.html#18"
 , "c1" : "ConfigurationDelta"
 , "c2" : "ConfigurationDelta(ConfigurationImage)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00022"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ConfigurationDelta.java.html#22"
 , "c1" : "void"
 , "c2" : "finishSnapshot()"
 , "c3" : "3"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00030"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ConfigurationDelta.java.html#30"
 , "c1" : "void"
 , "c2" : "replay(ConfigRecord)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00034"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ConfigurationDelta.java.html#34"
 , "c1" : "void"
 , "c2" : "deleteAll()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00041"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ConfigurationDelta.java.html#41"
 , "c1" : "ConfigurationImage"
 , "c2" : "apply()"
 , "c3" : "8"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00062"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ConfigurationDelta.java.html#62"
 , "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/metadata/src/main/java/org/apache/kafka/image/ConfigurationDelta.java.png" 

 , "ligneplantuml" : "./qc/metadata/src/main/java/org/apache/kafka/image/ConfigurationDelta.java.svg" }

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
 , "c4" : "1"
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
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00014"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ConfigurationDelta.java.html#14"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00014] The class ConfigurationDelta contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ConfigurationDelta.java.html#30"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00030] For method replay arguments ConfigRecord  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ConfigurationDelta.java.html#30"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00030] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ConfigurationDelta.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00044] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ConfigurationDelta.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method org.apache.kafka.image.ConfigurationDelta.apply@POLYN152316 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ConfigurationDelta.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.image.ConfigurationDelta.toString@POLYN153854 the MagicNumber/String  'ConfigurationDelta(' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ConfigurationDelta.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.image.ConfigurationDelta.toString@POLYN153854 the MagicNumber/String  'changedKeys=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ConfigurationDelta.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.image.ConfigurationDelta.toString@POLYN153854 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ConfigurationDelta.java.html#62"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00062] Public method toString is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ConfigurationDelta.java.html#30"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00030] Public method replay is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
};
console.log('leListeStr 99 main end');
