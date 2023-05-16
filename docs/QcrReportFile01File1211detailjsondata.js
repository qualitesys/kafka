console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreationGroup.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreationGroup.java 20 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.connect.util.TopicCreationGroup"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.util.TopicCreationGroup" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00044"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreationGroup.java.html#44"
 , "c1" : "TopicCreationGroup"
 , "c2" : "TopicCreationGroup(String;SourceConnectorConfig)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00061"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreationGroup.java.html#61"
 , "c1" : "Map&lt;String,TopicCreationGroup&gt;"
 , "c2" : "configuredGroups(SourceConnectorConfig)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00082"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreationGroup.java.html#82"
 , "c1" : "String"
 , "c2" : "name()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00095"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreationGroup.java.html#95"
 , "c1" : "boolean"
 , "c2" : "matches(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00108"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreationGroup.java.html#108"
 , "c1" : "NewTopic"
 , "c2" : "newTopic(String)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00117"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreationGroup.java.html#117"
 , "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00134"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreationGroup.java.html#134"
 , "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00141"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreationGroup.java.html#141"
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
   {

 "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreationGroup.java.svg" }

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
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "1"
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
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "13"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreationGroup.java.html#44"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00044] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreationGroup.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.connect.util.TopicCreationGroup.TopicCreationGroup@POLYN167520 the MagicNumber/String  '|' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreationGroup.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method org.apache.kafka.connect.util.TopicCreationGroup.TopicCreationGroup@POLYN167520 the MagicNumber/String  '|' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreationGroup.java.html#61"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00061] For method configuredGroups arguments SourceConnectorConfig  config"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreationGroup.java.html#61"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00061] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreationGroup.java.html#95"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00095] For method matches arguments String  topic"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreationGroup.java.html#108"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00108] For method newTopic arguments String  topic"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreationGroup.java.html#117"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00117] For method equals arguments Object  o"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreationGroup.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method org.apache.kafka.connect.util.TopicCreationGroup.equals@POLYN170771 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreationGroup.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.connect.util.TopicCreationGroup.equals@POLYN170771 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreationGroup.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00142] In method org.apache.kafka.connect.util.TopicCreationGroup.toString@POLYN172023 the MagicNumber/String  'TopicCreationGroup{' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreationGroup.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method org.apache.kafka.connect.util.TopicCreationGroup.toString@POLYN172023 the MagicNumber/String  'name='' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreationGroup.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method org.apache.kafka.connect.util.TopicCreationGroup.toString@POLYN172023 the MagicNumber/String  '\'' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreationGroup.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00144] In method org.apache.kafka.connect.util.TopicCreationGroup.toString@POLYN172023 the MagicNumber/String  ', inclusionPattern=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreationGroup.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.connect.util.TopicCreationGroup.toString@POLYN172023 the MagicNumber/String  ', exclusionPattern=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreationGroup.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.connect.util.TopicCreationGroup.toString@POLYN172023 the MagicNumber/String  ', numPartitions=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00147"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreationGroup.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method org.apache.kafka.connect.util.TopicCreationGroup.toString@POLYN172023 the MagicNumber/String  ', replicationFactor=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00148"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreationGroup.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method org.apache.kafka.connect.util.TopicCreationGroup.toString@POLYN172023 the MagicNumber/String  ', otherConfigs=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00149"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreationGroup.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00149] In method org.apache.kafka.connect.util.TopicCreationGroup.toString@POLYN172023 the MagicNumber/String  '}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreationGroup.java.html#61"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00061] Public method configuredGroups is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreationGroup.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
