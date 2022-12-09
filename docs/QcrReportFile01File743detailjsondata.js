console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/resource/ResourcePatternFilter.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/resource/ResourcePatternFilter.java 29 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/resource/ResourcePatternFilter.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.common.resource.ResourcePatternFilter"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.resource.ResourcePatternFilter" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00022"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/resource/ResourcePatternFilter.java.html#22"
 , "c1" : "ResourcePatternFilter"
 , "c2" : "ResourcePatternFilter(ResourceType;String;PatternType)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00029"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/resource/ResourcePatternFilter.java.html#29"
 , "c1" : "boolean"
 , "c2" : "isUnknown()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00034"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/resource/ResourcePatternFilter.java.html#34"
 , "c1" : "ResourceType"
 , "c2" : "resourceType()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00039"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/resource/ResourcePatternFilter.java.html#39"
 , "c1" : "String"
 , "c2" : "name()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00044"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/resource/ResourcePatternFilter.java.html#44"
 , "c1" : "PatternType"
 , "c2" : "patternType()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00049"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/resource/ResourcePatternFilter.java.html#49"
 , "c1" : "boolean"
 , "c2" : "matches(ResourcePattern)"
 , "c3" : "7"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00079"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/resource/ResourcePatternFilter.java.html#79"
 , "c1" : "boolean"
 , "c2" : "matchesAtMostOne()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00084"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/resource/ResourcePatternFilter.java.html#84"
 , "c1" : "String"
 , "c2" : "findIndefiniteField()"
 , "c3" : "6"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00099"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/resource/ResourcePatternFilter.java.html#99"
 , "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00104"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/resource/ResourcePatternFilter.java.html#104"
 , "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00117"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/resource/ResourcePatternFilter.java.html#117"
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
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/resource/ResourcePatternFilter.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/resource/ResourcePatternFilter.java.svg" }

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
 , "c4" : "1"
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
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "24"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/resource/ResourcePatternFilter.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00023] In method org.apache.kafka.common.resource.ResourcePatternFilter.ResourcePatternFilter@POLYN165073 the MagicNumber/String  'resourceType' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00025"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/resource/ResourcePatternFilter.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method org.apache.kafka.common.resource.ResourcePatternFilter.ResourcePatternFilter@POLYN165073 the MagicNumber/String  'patternType' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/resource/ResourcePatternFilter.java.html#49"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00049] For method matches arguments ResourcePattern  pattern"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/resource/ResourcePatternFilter.java.html#49"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00049] The argument pattern is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/resource/ResourcePatternFilter.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.common.resource.ResourcePatternFilter.matches@POLYN166174 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/resource/ResourcePatternFilter.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.common.resource.ResourcePatternFilter.matches@POLYN166174 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/resource/ResourcePatternFilter.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.common.resource.ResourcePatternFilter.matches@POLYN166174 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/resource/ResourcePatternFilter.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.common.resource.ResourcePatternFilter.matches@POLYN166174 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/resource/ResourcePatternFilter.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.common.resource.ResourcePatternFilter.matches@POLYN166174 the MagicNumber/String  'Unsupported PatternType: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/resource/ResourcePatternFilter.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.common.resource.ResourcePatternFilter.matchesAtMostOne@POLYN167819 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/resource/ResourcePatternFilter.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.common.resource.ResourcePatternFilter.findIndefiniteField@POLYN168021 the MagicNumber/String  'Resource type is ANY.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/resource/ResourcePatternFilter.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.common.resource.ResourcePatternFilter.findIndefiniteField@POLYN168021 the MagicNumber/String  'Resource type is UNKNOWN.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/resource/ResourcePatternFilter.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.common.resource.ResourcePatternFilter.findIndefiniteField@POLYN168021 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/resource/ResourcePatternFilter.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.common.resource.ResourcePatternFilter.findIndefiniteField@POLYN168021 the MagicNumber/String  'Resource name is NULL.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/resource/ResourcePatternFilter.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.common.resource.ResourcePatternFilter.findIndefiniteField@POLYN168021 the MagicNumber/String  'Resource pattern type is MATCH.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/resource/ResourcePatternFilter.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.common.resource.ResourcePatternFilter.findIndefiniteField@POLYN168021 the MagicNumber/String  'Resource pattern type is UNKNOWN.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/resource/ResourcePatternFilter.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.common.resource.ResourcePatternFilter.findIndefiniteField@POLYN168021 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/resource/ResourcePatternFilter.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.common.resource.ResourcePatternFilter.toString@POLYN168612 the MagicNumber/String  'ResourcePattern(resourceType=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/resource/ResourcePatternFilter.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.common.resource.ResourcePatternFilter.toString@POLYN168612 the MagicNumber/String  ', name=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/resource/ResourcePatternFilter.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.common.resource.ResourcePatternFilter.toString@POLYN168612 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/resource/ResourcePatternFilter.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.common.resource.ResourcePatternFilter.toString@POLYN168612 the MagicNumber/String  '&amp;lt;any&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/resource/ResourcePatternFilter.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.common.resource.ResourcePatternFilter.toString@POLYN168612 the MagicNumber/String  ', patternType=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/resource/ResourcePatternFilter.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.common.resource.ResourcePatternFilter.toString@POLYN168612 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/resource/ResourcePatternFilter.java.html#104"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00104] For method equals arguments Object  o"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/resource/ResourcePatternFilter.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00107] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/resource/ResourcePatternFilter.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.common.resource.ResourcePatternFilter.equals@POLYN169005 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/resource/ResourcePatternFilter.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.common.resource.ResourcePatternFilter.equals@POLYN169005 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/resource/ResourcePatternFilter.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.common.resource.ResourcePatternFilter.equals@POLYN169005 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/resource/ResourcePatternFilter.java.html#79"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00079] Public method matchesAtMostOne is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/resource/ResourcePatternFilter.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
