console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java 18 rule violations " 
 , "fic2"  : "./qc/metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.image.FeaturesDelta"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.image.FeaturesDelta" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00039"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java.html#39"
 , "c1" : "FeaturesDelta"
 , "c2" : "FeaturesDelta(FeaturesImage)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00043"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java.html#43"
 , "c1" : "Map<String,Optional<Short>>"
 , "c2" : "changes()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00047"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java.html#47"
 , "c1" : "Optional<MetadataVersion>"
 , "c2" : "metadataVersionChange()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00051"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java.html#51"
 , "c1" : "void"
 , "c2" : "finishSnapshot()"
 , "c3" : "3"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00059"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java.html#59"
 , "c1" : "void"
 , "c2" : "replay(FeatureLevelRecord)"
 , "c3" : "5"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00071"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java.html#71"
 , "c1" : "FeaturesImage"
 , "c2" : "apply()"
 , "c3" : "10"
 , "c4" : "12"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00103"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java.html#103"
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
   {"ligne" : "./qc/metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java.png" 

 , "ligneplantuml" : "./qc/metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java.svg" }

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
 , "c4" : "4"
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
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "7"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java.html#59"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00059] For method replay arguments FeatureLevelRecord  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java.html#59"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00059] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.image.FeaturesDelta.replay@POLYN155413 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java.html#71"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00071] For method apply list of called methods Object monObjet|V changes_getN156657|org.apache.kafka.image.FeaturesImage image_metadataVersionN157842"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00075] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00076] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00084] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00085] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.image.FeaturesDelta.apply@POLYN156155 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.image.FeaturesDelta.apply@POLYN156155 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.image.FeaturesDelta.toString@POLYN158078 the MagicNumber/String  'FeaturesDelta(' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.image.FeaturesDelta.toString@POLYN158078 the MagicNumber/String  'changes=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.image.FeaturesDelta.toString@POLYN158078 the MagicNumber/String  ', metadataVersionChange=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.image.FeaturesDelta.toString@POLYN158078 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java.html#43"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00043] Public method changes is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java.html#47"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00047] Public method metadataVersionChange is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java.html#103"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00103] Public method toString is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java.html#59"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00059] Public method replay is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
