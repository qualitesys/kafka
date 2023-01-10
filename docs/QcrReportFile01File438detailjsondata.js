console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/feature/Features.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/feature/Features.java 15 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/feature/Features.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.common.feature.Features"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.feature.Features" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00045"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/feature/Features.java.html#45"
 , "c1" : "Features"
 , "c2" : "Features(Map<String,VersionRangeType>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00055"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/feature/Features.java.html#55"
 , "c1" : "Features<SupportedVersionRange>"
 , "c2" : "supportedFeatures(Map<String,SupportedVersionRange>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00059"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/feature/Features.java.html#59"
 , "c1" : "Features<SupportedVersionRange>"
 , "c2" : "emptySupportedFeatures()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00063"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/feature/Features.java.html#63"
 , "c1" : "Map<String,VersionRangeType>"
 , "c2" : "features()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00067"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/feature/Features.java.html#67"
 , "c1" : "boolean"
 , "c2" : "empty()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00077"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/feature/Features.java.html#77"
 , "c1" : "VersionRangeType"
 , "c2" : "get(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00081"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/feature/Features.java.html#81"
 , "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00096"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/feature/Features.java.html#96"
 , "c1" : "Map<String,Map<String,Short>>"
 , "c2" : "toMap()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00134"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/feature/Features.java.html#134"
 , "c1" : "Features<SupportedVersionRange>"
 , "c2" : "fromSupportedFeaturesMap(Map<String,Map<String,Short>>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00140"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/feature/Features.java.html#140"
 , "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00153"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/feature/Features.java.html#153"
 , "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/feature/Features.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/feature/Features.java.svg" }

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
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "6"
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
 , "c1" : "00046"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/feature/Features.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.common.feature.Features.Features@POLYN164236 the MagicNumber/String  'Provided features can not be null.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/feature/Features.java.html#55"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00055] For method supportedFeatures arguments Map&lt;String ,SupportedVersionRange &gt;  features"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/feature/Features.java.html#77"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00077] For method get arguments String  feature"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/feature/Features.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.common.feature.Features.toString@POLYN165492 the MagicNumber/String  'Features{%s}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/feature/Features.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.common.feature.Features.toString@POLYN165492 the MagicNumber/String  '(%s -&amp;gt; %s)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/feature/Features.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.common.feature.Features.toString@POLYN165492 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/feature/Features.java.html#119"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00119] The argument featuresMap is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/feature/Features.java.html#119"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00119] The argument converter is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00134"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/feature/Features.java.html#134"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00134] For method fromSupportedFeaturesMap arguments Map&lt;String ,Map&lt;String ,Short &gt; &gt;  featuresMap"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/feature/Features.java.html#140"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00140] For method equals arguments Object  other"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/feature/Features.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00142] In method org.apache.kafka.common.feature.Features.equals@POLYN167892 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/feature/Features.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.common.feature.Features.equals@POLYN167892 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/feature/Features.java.html#59"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00059] Public method emptySupportedFeatures is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00134"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/feature/Features.java.html#134"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00134] Public method fromSupportedFeaturesMap is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/feature/Features.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.feature.Features.get@POLYN165345"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/feature/Features.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
