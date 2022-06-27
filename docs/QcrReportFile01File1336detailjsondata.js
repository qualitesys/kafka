console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java 21 rule violations " 
 , "fic2"  : "./qc/metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.image.FeaturesDelta"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.image.FeaturesDelta" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "FeaturesDelta"
 , "c2" : "FeaturesDelta(FeaturesImage)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,Optional<Short>>"
 , "c2" : "changes()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Optional<MetadataVersion>"
 , "c2" : "metadataVersionChange()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "finishSnapshot()"
 , "c3" : "3"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "replay(FeatureLevelRecord)"
 , "c3" : "5"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "FeaturesImage"
 , "c2" : "apply()"
 , "c3" : "10"
 , "c4" : "12"
}} 
,
{ "ligne" : {
   "c1" : "String"
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
"data12a" : [
]
,
"data12b" : [
]
,
"data12c" : [
]
,
"data13a" : [
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "4"
}}
,
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
 , "c4" : "7"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00015"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java.html#15"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00015] The class FeaturesDelta contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java.html#42"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00042] For method replay arguments FeatureLevelRecord  record"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java.html#42"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00042] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.image.FeaturesDelta.replay@POLYN170943 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java.html#54"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00054] For method apply list of called methods Object monObjet|org.apache.kafka.image.FeaturesImage image_metadataVersionN173372"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00058] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00059] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00067] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00068] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.image.FeaturesDelta.apply@POLYN171685 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.image.FeaturesDelta.apply@POLYN171685 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.image.FeaturesDelta.toString@POLYN173608 the MagicNumber/String  'FeaturesDelta(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.image.FeaturesDelta.toString@POLYN173608 the MagicNumber/String  'changes=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.image.FeaturesDelta.toString@POLYN173608 the MagicNumber/String  ', metadataVersionChange=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.image.FeaturesDelta.toString@POLYN173608 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00026"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java.html#26"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00026] Public method changes is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00030"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java.html#30"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00030] Public method metadataVersionChange is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java.html#86"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00086] Public method toString is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java.html#42"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00042] Public method replay is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.image.FeaturesDelta.replay@POLYN170943"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/FeaturesDelta.java.html#46"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00046] In the recursive method org.apache.kafka.image.FeaturesDelta.replay@POLYN170943 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
